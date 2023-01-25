import { useRouteError, Link, useParams } from "react-router-dom";

const CareerError = () => {
  const error = useRouteError()
  const {id} = useParams();

  return ( <div className="career-details">
    <h2>Error</h2>
    <p>{error.message} {id ? id : ''}</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, tenetur?</p>
    <Link to='/' className='btn'>Home page</Link>
  </div> );
}
 
export default CareerError;