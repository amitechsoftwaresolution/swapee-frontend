import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import NavigationComponent from './Components/Navigation/NavigationComponent'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'

const App = () => {
    const routes = [
      { name: "Home", path: "/", element: <Home /> },
      { name: "SignIn", path: "/signin", element: <SignIn /> },
      { name: "SignUp", path: "/signup", element: <SignUp /> },
      { name: "ForgotPassword", path: "/forgot-password", element: <ForgotPassword /> }
    ]

    const renderRoutes = (route, idx) => {
      const {name, element} = route
      return (
        <Route index = {name === "Home"} path = {route.path} element = {element} key = {idx}/> 
      )
    }

    return (
      <div>
          <NavigationComponent />
          <BrowserRouter>
            <Routes>
                { routes.map((route, idx) => renderRoutes(route, idx)) }
            </Routes>
          </BrowserRouter>
          <Footer />
      </div>
    )
}

export default App