import PropTypes from "prop-types";

const Sidebar = ({ children, isOpen, onClickCloseBtn }) => {
  return (
    <>
      <div
        className={`dark:bg-night-500 overflow-y-auto p-5 fixed top-0 w-full h-full md:w-[50%] lg:w-[35%] z-50 right-0 bg-white shadow-lg transition transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="btn-press-anim absolute right-4 top-4 p-2 text-black font-bold dark:text-white"
          onClick={onClickCloseBtn}
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"></div>
      )}
    </>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  children: PropTypes.object,
  isOpen: PropTypes.boolean,
  onClickCloseBtn: PropTypes.func,
};
