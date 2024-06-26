import React, { useEffect } from "react";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Layout from './components/Layout/Layout';
import {AboutUs, Privacy, Erorrpage, PortalManagementSystem, PortalMobileApp, Contact, Home, Solutions, News, SingleNews, OurCompanies} from "./pages"
import Aos from "aos";
import 'aos/dist/aos.css'
const App = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      errorElement:<Erorrpage />,
      children:[
        {
         element: <Home />,
          index:true,
          
        },
        {
          path:"about",
          element: <AboutUs/>
          
        },
        {
          path:"solutions",
          element: <Solutions />
          
        },
        {
          path:"contact",
          element: <Contact />
          
        },
        {
          path:"portalmanagementsystem",
          element: <PortalManagementSystem />
          
        },
        {
          path:"portalmobileApp",
          element: <PortalMobileApp />
          
        },
        {
          path:"privacy",
          element: <Privacy />
          
        },
        {
          path:"news",
          element: <News/>
          
        },
        {
          path:"singleNews/:id",
          element: <SingleNews/>
          
        },
        {
          path:"ourCompanies",
          element: <OurCompanies/>
          
        }
      ]
  
    },
  ])
    return (
      <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
    );

  
}

export default App
