import "./Header.css";
import image_logo_1 from '../../../assets/images/image_logo_1.png'
import NavigationBar from "../Navigation/NavigationBar";
import { routesLeft, routesRight } from "../../../utils/routes";
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className = 'header'>
            <div className="header__wrapper">
                <NavigationBar list={routesLeft} />
                <Link to={routesLeft[0].path}>
                    <img className="header__logo" src={image_logo_1} alt="App logo" />
                </Link>     
                <NavigationBar list={routesRight} />
                
            </div>
        </header>
    )
}

export default Header; 