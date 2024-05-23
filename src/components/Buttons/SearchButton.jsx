import './SearchButton.css';
import searchIcon from '../img/white-search.png';

export const SearchButton = ({ onClick }) => {
  return (
    <button className="search-button" onClick={onClick}>
      <img src={searchIcon} alt="Search" className="search-icon" />
      <span>Search</span>
    </button>
  );
};
