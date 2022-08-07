import React from 'react'

import CustomThemeContext from './Context/CustomThemeContext'
import NavigationComponent from './Components/Navigation/NavigationComponent'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

const App = () => {
    return (
      <div>
        <CustomThemeContext>
          <NavigationComponent />
          <Home />
          <Footer />
        </CustomThemeContext>
      </div>
    )
}

export default App