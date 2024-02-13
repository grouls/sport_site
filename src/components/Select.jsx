import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({ title, options, className, defaultValue }) => {
  return (
    <div className="relative">
      <select
        name={title}
        id={title}
        defaultValue={defaultValue || ""}
        className={twMerge(
          `appearance-none border border-gray-300 bg-white ${className}`
        )}
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
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Select;
