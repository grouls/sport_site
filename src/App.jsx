import NewArrivalsSection from "./components/NewArrivalsSection";
import { SHOE_LIST } from "./config";
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickCloseBtn={() => setSidebarOpen(false)}
      >
        Cart
      </Sidebar>
    </div>
  );
}

export default App;
