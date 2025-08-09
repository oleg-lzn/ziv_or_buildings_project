import outside_view from "../../../../assets/images/ziv_images/outside_view.jpg";
import "./HistoryBlock.css";
import { routesLeft } from "../../../../utils/routes.js";
import { Link } from "react-router-dom";

const HistoryBlock = () => {
  return (
    <section className="history-block">
    <div className="history-block__text-container">
            <p className="history-block__subtitle">Ziv Tower History</p>
            <h2 className="history-block__title">THE STORY BEHIND THE ICON</h2>
            <p className="history-block__text">
            The Ziv Towers complex, located on the main street of Ramat HaChayal, has been an office and commercial complex for the Israeli high-tech elite for many years.
        The complex is made up of four office buildings arranged in a unique "H" shape, rising to a height of up to 11 floors, and with a total area of approximately 100,000 square meters. In the center of the impressive towers, and due to their unique shape, is a beautiful pastoral inner plaza. The inner courtyard is paved with stone tiles, decorated with ornamental ponds, art exhibits, and plenty of green areas and seating areas between them.
        In addition, the complex includes restaurants and cafes, as well as businesses and shops for the benefit of residents and visitors.
        The towers' lobby, which includes spectacular art exhibits, is staffed 24/7, including an advanced elevator system and smart access control.
        The complex has ample underground parking, with the option of a monthly subscription and for use by guests and visitors.
        The building won the Construction Excellence Award from the Israel Contractors and Builders Association.

        You are invited to join the spectacular complex and enjoy all Its advantages!
            </p>
            <Link to={routesLeft[1].children[2].path} className="history-block__button">
            Continue Reading...
            </Link>
     </div>
     <img src={outside_view} alt="ziv_tower_image" className="history-block__image" />
    </section>
  );
};

export default HistoryBlock;