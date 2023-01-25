import { Outlet } from "react-router-dom";

const CreersLayout = () => {
  return ( <div className="careers-layout">
    <h2>Careers</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat explicabo modi aspernatur ratione neque vel adipisci recusandae quam ipsa. Consectetur id aspernatur rerum hic amet, ullam facilis non optio nam.</p>
    <Outlet/>
  </div> );
}
 
export default CreersLayout;