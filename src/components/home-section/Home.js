import './Home.css'

export default function Home(){
    return (
        <>
            <div className='home'>
                <div className='home-row'>
                    <SongCategory category="English songs"/>
                    <SongCategory category="English songs"/>
                </div>
                <div className='home-row'>
                    <SongCategory category="English songs"/>
                    <SongCategory category="English songs"/>
                </div>
            </div>
        </>
    );
}

function SongCategory(props){
    return (
        <>
            <button className='song-category-btn'>
               {props.category}
            </button>
        </>
    );
}