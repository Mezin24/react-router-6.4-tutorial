import { Link } from "react-router-dom";

const NotFound = () => {
  return ( <div className="not-found">
    <h1>Page Not Found</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus adipisci reprehenderit facilis illum maxime a accusantium! Sequi, repellat? Sit, sunt.</p>
    <p>Go to <Link to='/'>Homepage</Link>.</p>
  </div> );
}
 
export default NotFound