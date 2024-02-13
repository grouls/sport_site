import NewArrivalsSection from "./components/NewArrivalsSection";
import { SHOE_LIST } from "./config";
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updateCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        updateCartItems[existingItemIndex].qty = qty;
        updateCartItems[existingItemIndex].size = size;
      } else {
        updateCartItems.push({ product, qty, size });
      }

      setCartItems(updateCartItems);
    }
  };

  const removeFromCart = (productId) => {
    const updateCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );

    updateCartItems.splice(existingItemIndex, 1);
    setCartItems(updateCartItems);
  };

  return (
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night-500">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickCloseBtn={() => setSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickRemove={removeFromCart} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="btn-press-anim shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
