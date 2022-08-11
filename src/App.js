import React from 'react'

import NavigationComponent from './Components/Navigation/NavigationComponent'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

const App = () => {
    return (
      <div>
          <NavigationComponent />
          <Home />
          <Footer />
      </div>
    )
}

export default App