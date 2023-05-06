import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class SearchBox extends Component {
  render() {
    const { onSearch, placeholder } = this.props;

    return (
      <input
        type="search"
        className="search-box"
        placeholder={placeholder}
        onChange={onSearch}
      />
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
