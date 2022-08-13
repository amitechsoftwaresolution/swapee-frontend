import React from 'react'

import NavigationComponent from './Components/Navigation/NavigationComponent'
import Footer from './Components/Footer/Footer'
import SignUp from './Pages/SignUp/SignUp'

const App = () => {
    return (
      <div>
          <NavigationComponent />
          <SignUp />
          <Footer />
      </div>
    )
}

export default App