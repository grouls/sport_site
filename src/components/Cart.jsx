import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ cartItems, onClickRemove }) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      {cartItems.length ? (
        <ul className="space-y-5">
          {cartItems?.map((cartItem) => (
            <li key={cartItem.product.id}>
              <CartItem item={cartItem} onClickRemove={onClickRemove} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-full bg-gray-50 p-2 space-y-2 dark:bg-transparent dark:text-white">
          <div className="flex space-x-2">Your cart appears to be empty.</div>
        </div>
      )}
    </>
  );
};

export default Cart;

Cart.propTypes = {
  cartItems: PropTypes.arrayOf({
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      className: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
    }),
    qty: PropTypes.number,
    price: PropTypes.number,
  }),
  onClickRemove: PropTypes.func,
};
