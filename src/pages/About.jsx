import { Navigate } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const [user, setuser] = useState('mario');

  if (!user) {
    return <Navigate to='/' replace={true} />
  }
  
  return ( <div className="about">
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dignissimos, sapiente doloremque cupiditate molestias expedita repellat cum, accusantium quibusdam beatae. Nemo facilis perferendis eum eius ipsum dolores, ad ipsa.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dignissimos, sapiente doloremque cupiditate molestias expedita repellat cum, accusantium quibusdam beatae. Nemo facilis perferendis eum eius ipsum dolores, ad ipsa.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis dignissimos, sapiente doloremque cupiditate molestias expedita repellat cum, accusantium quibusdam beatae. Nemo facilis perferendis eum eius ipsum dolores, ad ipsa.</p>
    <button className="btn" onClick={() => setuser(null)}>Logout</button>
  </div> );
}
 
export default About;