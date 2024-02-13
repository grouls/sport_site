import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
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
};
