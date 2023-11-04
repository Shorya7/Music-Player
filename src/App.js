// import Login from './components/Login';
import './App.css';
import Particles from './components/Particles';
import AppRouter  from './components/Routers';


function App() {
  return (
    <div className="App">

      <AppRouter/>
      <Particles id="tsparticles" />
    </div>

  );
}

export default App;
