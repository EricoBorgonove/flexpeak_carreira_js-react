import {Routes, Route} from 'react-router-dom';
import Home from './pages/NewHome';
import Sobre from './pages/NewSobre';
import Header from './components/Header';
import NewOutro from './pages/NewOutro';

function NewApp (){
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/sobre" element = {<Sobre/>}/>
                <Route path='/outro' element = {<NewOutro/>}/>
            </Routes>
        </>
    )
}
export default NewApp;