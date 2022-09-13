import "./searchBar.scss";

function SearchBar() {
    return (
    <div className="searchbar_wrapper">
        <img src="./img/searchBar/search-icon.png" alt="Search" className="search-icon" />
        <input type="text" placeholder="Пошук товару" className="search_input"/>
    </div>
    
    )
}

export default SearchBar;