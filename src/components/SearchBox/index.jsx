import { Component } from "react";
import PropTypes from "prop-types";

export default class SearchBox extends Component {
  render() {
    const { onSearch } = this.props;

    return (
      <input
        type="search"
        className="search-box"
        placeholder="Search monsters"
        onChange={onSearch}
      />
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
