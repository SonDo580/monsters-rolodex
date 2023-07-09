import { ChangeEventHandler } from "react";
import "./style.css";

type ISearchBoxProps = {
  onSearch: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

export default function SearchBox({ onSearch, placeholder }: ISearchBoxProps) {
  return (
    <input
      type="search"
      className="search-box"
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
}
