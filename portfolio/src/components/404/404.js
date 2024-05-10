import './404.scss';
import Header from "../Header/Header"


export default function Page404() {
    return(
    <div className='container'>
        <Header></Header>
        <div className="hr"></div>
        <h1>Erreur 404</h1>
        <p>Cette erreur survient quand l'URL de la page n'est pas trouvable. <br/> 
        Veuillez cliquer sur le logo pour retourner sur la page d'accueil</p>
    </div>
    )
}