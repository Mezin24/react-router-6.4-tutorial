import { createBrowserRouter, RouterProvider,  Route, createRoutesFromElements, } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import HelpLayout from './layout/HelpLayout'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import CreersLayout from "./layout/CreersLayout";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import CareersError from './pages/careers/CareersError'
import { careersLoader, careerDetailLoader, contactAction } from "./utils/helpers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>} action={contactAction}/>
        </Route>
        <Route path="careers" element={<CreersLayout/>} errorElement={<CareersError/>}>
          <Route index element={<Careers/>} loader={careersLoader}/>
          <Route path=":id" element={<CareerDetails/>} loader={careerDetailLoader}/>
        </Route>

        <Route path="*"  element={<NotFound/>}/>
    </Route>
  )
)

const App = () => {
  return ( <div className="app">
      <RouterProvider router={router}/>
  </div> );
}
 
export default App;