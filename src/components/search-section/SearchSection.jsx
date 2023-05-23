import './SearchSection.css'

export function SearchSection(){
    return (<>
        <div className="search">
            <div className="search-bar">
                <input type='text' placeholder='search' />
                <button>
                    <img src="./nav icons/search.png" alt="" />
                </button>
            </div>
            <div className="search-results">
                <div className="search-message">
                    <h1>Search here!</h1>
                    <p>search song, albums, artists and many more...</p>
                </div>
            </div>
        </div>
    </>);
}