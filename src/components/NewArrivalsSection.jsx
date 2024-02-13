import Card from "./Card";
import PropTypes from "prop-types";

const NewArrivalsSection = ({ items, onClickCard }) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('src/assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => {
          return <Card key={item.id} item={item} onClick={onClickCard} />;
        })}
      </div>
    </div>
  );
};

NewArrivalsSection.propTypes = {
  id: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      className: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  onClickCard: PropTypes.func,
};

export default NewArrivalsSection;
