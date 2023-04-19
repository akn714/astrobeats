import './SongCategory.css'

export default function SongCategory(props){
    return (
        <>
            <button className='song-category-btn'>
               {props.category}
            </button>
        </>
    );
}