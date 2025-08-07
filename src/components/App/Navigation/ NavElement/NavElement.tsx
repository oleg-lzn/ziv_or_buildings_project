import { useState } from "react";
import { Link } from 'react-router-dom'
import './NavElement.css'

const NavElement = ({ item }) => {

    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
       <li className ='navigation__bar_item'
       onMouseEnter={() => setIsOpen(true)}
       onMouseLeave={() => setIsOpen(false)}
       >

       <Link to={item.path} className="navigation__bar_item_link">{item.name}</Link>

       {hasChildren && (
        <ul className={`navigation__bar_item_dropdown ${isOpen ? "navigation__bar_item_dropdown_open" : ""}`}>    
          {item.children.map((child, idx) => (
            <li key={idx} className="navigation__bar_item_link">
              <Link to={child.path} className="navigation__bar_item_link">{child.name}</Link>
            </li>
          ))}
        </ul>
      )}

       </li>
    )
}

export default NavElement;