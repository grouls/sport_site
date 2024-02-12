import PropTypes from "prop-types";

const Card = ({ key, item }) => {
  return (
    <div
      key={key}
      className={`${item.className} max-w-xl cursor-pointer transform transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="underline underline-offset-4 font-semibold mt-10">
          SHOP NOW +
        </div>
        <img
          className="h-40 w-56 absolute top-5 left-[40%]"
          src={item.img.src}
          alt={item.img.alt}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  key: PropTypes.number,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    className: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Card;
