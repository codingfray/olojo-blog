import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Page not Found</h2>
            <p>CLick <Link className="linked" to = '/'>here</Link> to go to the Homepage.</p>
        </div>
    );
}
 
export default NotFound;