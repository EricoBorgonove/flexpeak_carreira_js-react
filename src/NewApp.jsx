import {Routes, Route} from 'react-router-dom';
import Home from './pages/NewHome';
import Sobre from './pages/NewSobre';
import Header from './components/Header';

function NewApp (){
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
export default NewApp;