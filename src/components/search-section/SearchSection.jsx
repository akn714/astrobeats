export function SearchSection(){
    return (<>
        <div className="search">
            <input type='text' placeholder='search' />
            <div className="search-results">
                <div className="search-message">
                    <h1>Search here!</h1>
                    <p>search song, albums, artists and many more...</p>
                </div>
            </div>
        </div>
    </>);
}