import logo from './logo.svg';
import './App.css';
// import './my-sass.scss';
import Header from './components/Header';
import Body from './components/Body.js';
import Footer from './components/Footer';
import About from './components/About.js';
import Contact from './components/Help.js';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
