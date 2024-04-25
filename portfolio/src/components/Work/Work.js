import { NavLink } from 'react-router-dom';
import Kasa_logo from '../../assets/Kasa/1680512368252_Kasa logo.webp'
import SophieBluel from '../../assets/Sophie_Bluel.webp';


import './Work.scss'

export default function Work() {
    return (
        <section className="Work" id="work">
        <h2>Work</h2>
        <div className="Work_container">
            <NavLink to={`Kasa`} className="Work_container-card">
                <div className='Work_container-img'>
                    <img src={Kasa_logo} alt="Projet Kasa"></img>
                </div>
                <div className="Work_container-txt">
                    <h2>Projet Kasa</h2>
                    <p>Projet de site de location de logements en React.js</p>
                </div>
            </NavLink>

            <NavLink to={'SophieBluel'} className="Work_container-card">
                <div className='Work_container-img'>
                    <img src={SophieBluel} alt="Projet Sophie Bluel"></img>
                </div>
                <div className="Work_container-txt">
                    <h2>Projet Sophie Bluel</h2>
                    <p>Projet basé sur la communication entre une API et l'utilisateur</p>
                </div>
            </NavLink>
        </div>
    </section>
    )
}