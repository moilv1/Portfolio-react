import Header from "../Header/Header";
import Info from "../Info/Info";
import Work from "../Work/Work"
import Footer from "../Footer/Footer";
import './Home.scss';

export default function Home() {
    return(
        <>
        <Header></Header>
        <div className="hr"></div>
        <Info></Info>
        <div className="hr"></div>
        <Work></Work>
        <Footer></Footer>
        </>
    )
}

