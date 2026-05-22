import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/home/home'
import Detalhes from './pages/event details/event'
import Perfil from './pages/perfil/perfil'
import LoginPage from './pages/Login/login'
import Cadastro from './pages/cadastro/cadastro'

const App = ()=>{
    return(
        <>

            <BrowserRouter>
                <Routes>  
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                    <Route path='/home' element={<Home/>}/>                       
                    <Route path='/detalhes/:id' element={<Detalhes/>}/>
                    <Route path='/perfil' element={<Perfil/>}/>         

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App