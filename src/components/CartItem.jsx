import PropTypes from "prop-types";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZE } from "../config";

const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="hover:bg-[#DAFFA2] cursor-pointer bg-gray-50 p-2 space-y-2">
      <div className="flex space-x-2">
        <img className="h-24" src={product.img.src} alt={product.img.alt} />
        <div className="space-y-2">
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold">{product.price}€</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select
              defaultValue={size}
              title={"SIZE"}
              options={SIZE}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select
              defaultValue={qty}
              title={"QTY"}
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
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
    size: PropTypes.number,
  }),
};

export default CartItem;
