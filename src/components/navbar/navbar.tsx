import './navbar.css'

import ProfileIcon from '../../assets/icons/profile.svg'
import BilheteIcon from '../../assets/icons/bilhete.svg'
import EventIcon from '../../assets/icons/events.svg'
import MusicIcon from '../../assets/icons/musicIcon.svg'

function Navbar(){
    return (
        <>
            <div className='navbar'>

                <div className='card-name'>
                    <p>[app-name]</p>
                </div>

                <div className='card-icons'>
                    <a href="/perfil">
                        <img className='icons' src= {ProfileIcon}  />
                    </a>

                    <a href="#">
                        <img className='icons' src= {BilheteIcon}  />
                    </a>

                    <a href="/">
                        <img className='icons' src= {EventIcon}  />
                    </a>                      

                    <a href="#">
                        <img className='icons' src= {MusicIcon }  />
                    </a>                        
                    
                    
                </div>
                

            </div>
        </>
    )
}

export default Navbar