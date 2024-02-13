import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({ title, options, className, value, onChange }) => {
  return (
    <div className="relative dark:text-black">
      <select
        name={title}
        id={title}
        value={value || ""}
        className={twMerge(
          `appearance-none border border-gray-300 bg-white ${className}`
        )}
        onChange={(e) => onChange(e.target.value)}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
