import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NavigationComponent from './Components/Navigation/NavigationComponent'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import AboutUs from './Pages/AboutUs/AboutUs'
import PrivacyAndPolicy from './Pages/PrivacyAndPolicy/PrivacyAndPolicy'
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions'
import Category from './Pages/Category/Category'
import Ad from './Pages/Ad/Ad'
import Store from './Pages/Store/Store'
import FAQ from './Pages/FAQ/FAQ'
import PageNotFound from './Pages/PageNotFound/PageNotFound'

import paths from './Data/Json/paths.json'

const App = () => {
    const routes = [
      { name: "Home", path: paths.Home, element: <Home /> },
      { name: "SignIn", path: paths.SignIn, element: <SignIn /> },
      { name: "SignUp", path: paths.SignUp, element: <SignUp /> },
      { name: "ForgotPassword", path: paths.ForgotPassword, element: <ForgotPassword /> },
      { name: "AboutUs", path: paths.AboutUs, element: <AboutUs /> },
      { name: "Privacy & Policy", path: paths.PrivacyAndPolicy, element: <PrivacyAndPolicy /> },
      { name: "Terms & Conditions", path: paths.TermsAndConditions, element: <TermsAndConditions /> },
      { name: "Category", path: paths.Category, element: <Category /> },
      { name: "Ad", path: paths.Ad, element: <Ad /> },
      { name: "Store", path: paths.Store, element: <Store /> },
      { name: "FAQ", path: paths.FAQ, element: <FAQ /> }
    ]

    const renderRoutes = (route, idx) => {
      const {name, element} = route
      return (
        <Route index = {name === "Home"} path = {route.path} element = {element} key = {idx}/> 
      )
    }

    return (
      <div>
          <BrowserRouter>
            <NavigationComponent />
            <Routes>
                { routes.map((route, idx) => renderRoutes(route, idx)) }
                <Route path = "*" element = {<PageNotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      </div>
    )
}

export default App