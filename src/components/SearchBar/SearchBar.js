import "./searchBar.scss";

function SearchBar() {
    return (
    <>
        <img src="./img/searchBar/search-icon.png" alt="Search" className="search-icon" />
        <input type="text" placeholder="Пошук товару"/>
    </>
    
    )
}

export default SearchBar;