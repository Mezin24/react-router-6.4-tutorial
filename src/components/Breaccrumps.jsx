import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const {pathname} = useLocation()

  let currentLocation = '';

  const crumbs = pathname.split('/').filter(item => item !== '')
    .map(crumb => {
      currentLocation += crumb + '/';

      return <div className="crumb" key={crumb}>
        <Link to={currentLocation}>{crumb}</Link>
      </div>
    })

  return ( <div className="breadcrumbs">
    {crumbs}
  </div> );
}
 
export default Breadcrumbs;