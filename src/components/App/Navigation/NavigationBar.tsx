import "./NavigationBar.css";
import NavElement from "./ NavElement/NavElement";

const NavigationBar = ({ list }) => {
    return (
        <ul className = 'navigation__bar'>
            {list.map((item)=> (
                <NavElement key={item.name} item ={item} />
            ))}
        </ul>
    )
}

export default NavigationBar;