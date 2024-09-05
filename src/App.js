import './App.css';

import Header from './components/Header/Header';
import PersonalBanner from './components/PersonalBanner/PersonalBanner';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">

        <Header nome="seu nome aqui"/>

        <PersonalBanner />

        <AboutMe />

    </div>
  );
}

export default App;
