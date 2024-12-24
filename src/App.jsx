import './App.css';
import Hero from './components/Hero';
import Main from './components/Main';
import Navigation from "./components/Navigation";
import Service from './components/Service';
const App = () => {
    return (
    <div>
        <Navigation/>
        <Main/>
        <Service/>
        <Hero/>
    </div>
    );
}
export default App
