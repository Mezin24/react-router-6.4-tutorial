import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData()
  
  return ( <div className="careers">
    {careers.map(career => (
      <Link to={career.id.toString()} key={career.title}>
        <p>{career.title}</p>
        <p>{career.location}</p>
      </Link>
    ))}
  </div> );
}
 
export default Careers;