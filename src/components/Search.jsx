import IconSearch from "../assets/icons/Icon-search";

export default function Search() {
  return (
    <div className="search-wrapper">
      <IconSearch />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
}
