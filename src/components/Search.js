import './Search.css';

// Компонент отвечающий за поиск
const Search = ({ img, className, value}) => {
  return (
    <div className={className}>
      <img className="search-logo" src={img} alt="logo" />
      <div className="search-row">
        <input className="search-input" type="text" />
        <button className="search-button" type="submit">Найти</button>
      </div>
      <div>
        <span>Найдется все. Например: </span>
        <span className="secondary-text">{value.searchIdea}</span>
      </div>
    </div>
  );
}
export default Search;