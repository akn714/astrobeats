import './Home.css'

export default function Home() {
    return (
        <>
            <div className='home'>
                <div className='home-row'>
                    <SongCategory category="English songs" style={{ 'color': '#409d9d' }} />
                    <SongCategory category="Hindi songs" style={{ 'color': '#d51b1b' }} />
                </div>
                <div className='home-row'>
                    <SongCategory category="Trending songs" style={{ 'color': '#5058bb' }} />
                    <SongCategory category="Top songs" style={{ 'color': '#29ad58' }} />
                </div>
            </div>
        </>
    );
}

function SongCategory(props) {
    return (
        <>
            <button className='song-category-btn' style={props.style}>
                {props.category}
            </button>
        </>
    );
}