import { HashLink as Link } from 'react-router-hash-link';
import './Footer.scss'
import Up_arrow from '../../assets/téléchargement.png';



export default function Footer() {
    return (
        <footer>
            <Link to={`#UP`}><img src={Up_arrow} alt='logo'></img></Link>
        </footer>
    )
}