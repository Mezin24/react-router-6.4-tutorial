import { useParams, useLoaderData, Link } from "react-router-dom";

const CareerDetails = () => {
  const {id} = useParams();
  const career = useLoaderData()

  return ( <div className="career-details">
    <h3>Career Details For {career.title}</h3>
    <p>Starting salary {career.salary}</p>
    <p>Loaction {career.location}</p>

    <div className="details">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores id soluta sapiente laborum veritatis sequi eaque iure nam eius, accusamus quos illum sint voluptate, inventore itaque, animi corporis dignissimos.</p>
    </div>
    <Link to='/careers' className="btn">Back to careers</Link>
  </div> );
}
 
export default CareerDetails;