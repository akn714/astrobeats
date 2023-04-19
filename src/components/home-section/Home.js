import './Home.css'
import SongCategory from './SongCategory'

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