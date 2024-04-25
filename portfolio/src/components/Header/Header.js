import './Header.scss'
import logo from '../../assets/logo.webp'
import CV from '../../assets/CV_Melvin_Flahaut.pdf';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header id='UP'>
            <NavLink to={`/`}><img src={logo} alt='Logo de Melvin Flahaut' className='Logo_Melvin'></img></NavLink>
            <a href='/'>Profil</a>
            <a href={CV} download="CV_Melvin_Flahaut">CV</a>
            <a href="mailto:melvinflahautpro@gmail.com">Contact</a>
        </header>
        
    )
}