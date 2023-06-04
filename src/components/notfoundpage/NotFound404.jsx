import './NotFound404.css'
import { Link } from 'react-router-dom'

export function NotFound404() {
    return (
        <>
            <div class="page-not-found">
                <h2>404 page not found !</h2>
                <p>go to <Link to='/'>home</Link> instead.</p>
            </div>
            <script>
                {
                    // clearInterval(song_sync);
                }
            </script>
        </>
    );
}
