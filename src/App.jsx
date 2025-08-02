import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';

function App (){
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/sobre" element = {<Sobre/>}/>
            </Routes>
        </>
    )
}
export default App;