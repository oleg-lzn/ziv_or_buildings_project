import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import "./Card.css";

const CardComponent = ({ image, title, description }: { image: string, title: string, description: string }) => {
  return (
    <div className="cards-list__item">
        <Card>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                    <img src={image} alt="card" className="cards-list__item-image" />
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </Card>
    </div>
  );
};

export default CardComponent;