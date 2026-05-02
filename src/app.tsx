import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './styles/App.css'
//import LoginPage from './pages/Login/login'
import Home from './pages/home/home'
import Detalhes from './pages/event details/event'
import Perfil from './pages/perfil/perfil'

const App = ()=>{
    return(
        <>

            <BrowserRouter>
                <Routes>
                
                    <Route path='/eventos' element={<Home/>}/>
                    <Route path='/detalhes' element={<Detalhes/>}/>
                    <Route path='/perfil' element={<Perfil/>}/>
                    

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App