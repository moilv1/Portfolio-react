import Header from "../Header/Header";
import Info_Projet from "../Info_Projet/InfoProjet";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";
import DataJson from '../../JSON/Data.json';
import './Kasa.scss';
import SideBarModal from "../SideBarModal/SideBar";


import Kasa_Logement from '../../assets/Kasa/Kasa_logement.webp';
import Kasa_Home from '../../assets/Kasa/Kasa_home.webp';
import Kasa_404 from '../../assets/Kasa/Kasa_404.webp';
import Kasa_About from '../../assets/Kasa/Kasa_About.webp'


export default function Kasa() {
    const KasaData = DataJson.find(product => product.Titre_projet === "Projet Kasa");
    const description_1 = KasaData.descriptions[0].description;
    const description_2 = KasaData.descriptions[1].description;
    const description_3 = KasaData.descriptions[2].description;
    const description_4 = KasaData.descriptions[3].description;

    return (

        <>
        <Header></Header>
        <div className="hr"></div>
        <SideBarModal lien={'https://github.com/moilv1/P.8-KASA'}></SideBarModal>
        <section className="content">
            <Info_Projet source={Kasa_Home} ></Info_Projet>
            <Modal description={description_1}></Modal>
            <Info_Projet source={Kasa_Logement} ></Info_Projet>
            <Modal description={description_2}></Modal>
            <Info_Projet source={Kasa_404} ></Info_Projet>
            <Modal description={description_3}></Modal>
            <Info_Projet source={Kasa_About} ></Info_Projet>
            <Modal description={description_4}></Modal>
        </section>
        <Footer goUP={'/Kasa#UP'}></Footer>
        </>
    )
}