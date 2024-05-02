import SideBarModal from "../SideBarModal/SideBar";
import Info_Projet from "../Info_Projet/Info_Projet";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DataJson from "../../JSON/Data.json";

import Home_SB from '../../assets/Sophie_Bluel/Home_SB.png';
import Login_SB from '../../assets/Sophie_Bluel/Login_SB.png';
import Admin_SB from '../../assets/Sophie_Bluel/Admin_SB.png';
import Modal_SB from '../../assets/Sophie_Bluel/Modal_SB.png';
import Ajout_SB from '../../assets/Sophie_Bluel/Ajout_SB.png';
import Valider_SB from '../../assets/Sophie_Bluel/Valider_SB.png';


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