import './AddToPlaylistOpts.css'

export function AddToPlaylistOpts(){
    return (
        <>
            <div className="add-to-playlist-opts">
                <div className="atpo-div">
                    <div>
                        <label className="atpo-item">
                            <p>test playlist 1</p>
                            <input type="checkbox" />
                            <span className='atpo-checkbox'></span>
                        </label>
                        <label className="atpo-item">
                            <p>test playlist 2</p>
                            <input type="checkbox" />
                            <span className='atpo-checkbox'></span>
                        </label>
                        <label className="atpo-item">
                            <p>test playlist 3</p>
                            <input type="checkbox" />
                            <span className='atpo-checkbox'></span>
                        </label>
                        <button className='atpo-btn'>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}