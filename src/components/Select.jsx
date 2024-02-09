import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";

const Select = ({ title, options }) => {
  return (
    <div className="relative">
      <select
        name={title}
        id={title}
        defaultValue={""}
        className="w-24 appearance-none border border-gray-300 p-4 bg-white"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div className="absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number),
};

export default Select;
