import SideBarModal from "../SideBarModal/SideBar";
import Info_Projet from "../Info_Projet/InfoProjet";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DataJson from "../../JSON/Data.json";
import logo_html from '../../assets/HTML5_logo_and_wordmark.svg.png';
import logo_github from '../../assets/GitHub-Logo.wine.png';
import logo_JS from '../../assets/JS_logo.png';
import logo_css from '../../assets/css.png';

import './Sophie_bluel.scss'

import Home_SB from '../../assets/Sophie_Bluel/Home_SB.webp';
import Login_SB from '../../assets/Sophie_Bluel/Login_SB.webp';
import Admin_SB from '../../assets/Sophie_Bluel/Admin_SB_1.webp';
import Modal_SB from '../../assets/Sophie_Bluel/Modal_SB.webp';
import Ajout_SB from '../../assets/Sophie_Bluel/Ajout_SB.webp';
import Valider_SB from '../../assets/Sophie_Bluel/Valider_SB.webp';


export default function Sophie_Bluel() {
    const SophieData = DataJson.find(product => product.Titre_projet === "Projet Sophie Bluel");

    const description_1 = SophieData.descriptions[0].description;
    const description_2 = SophieData.descriptions[1].description;
    const description_3 = SophieData.descriptions[2].description;
    const description_4 = SophieData.descriptions[3].description;
    const description_5 = SophieData.descriptions[4].description;
    const description_6 = SophieData.descriptions[5].description;

    
    return (
        <>
        <Header></Header>
        <div className="hr"></div>
        <h1>Projet Sophie Bluel</h1>
        <div className="skills">
            <p>Compètences utilisé pour le projet Sophie Bluel :</p>
            <div className="skills_img">
                <img src={logo_html}></img>
                <img src={logo_css}></img>
                <img src={logo_JS}></img>
                <img src={logo_github}></img>
            </div>
        </div>
        <SideBarModal lien={'https://github.com/moilv1/P.6-Sophie-Bluel'}></SideBarModal>
        <section className="content">
            <Info_Projet source={Home_SB} ></Info_Projet>
            <Modal description={description_1}></Modal>
            <Info_Projet source={Login_SB} ></Info_Projet>
            <Modal description={description_2}></Modal>
            <Info_Projet source={Admin_SB} ></Info_Projet>
            <Modal description={description_3}></Modal>
            <Info_Projet source={Modal_SB} ></Info_Projet>
            <Modal description={description_4}></Modal>
            <Info_Projet source={Ajout_SB} ></Info_Projet>
            <Modal description={description_5}></Modal>
            <Info_Projet source={Valider_SB} ></Info_Projet>
            <Modal description={description_6}></Modal>
        </section>
        <Footer></Footer>
        </>
    )
}