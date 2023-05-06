import PropTypes from "prop-types";
import "./style.css";

export default function SearchBox({ onSearch, placeholder }) {
  return (
    <input
      type="search"
      className="search-box"
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
