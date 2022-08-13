import React from 'react'

import NavigationComponent from './Components/Navigation/NavigationComponent'
import Footer from './Components/Footer/Footer'
import SignIn from './Pages/SignIn/SignIn'

const App = () => {
    return (
      <div>
          <NavigationComponent />
          <SignIn />
          <Footer />
      </div>
    )
}

export default App