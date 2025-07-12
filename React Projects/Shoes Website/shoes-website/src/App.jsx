
import './App.css'
import HeroSection  from './Components/Hero.jsx';

import Navigation from './Components/Navigation.jsx'


const App = () => {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
      {/* Add other components here as needed */}
    </div>
  )

};

export default App;