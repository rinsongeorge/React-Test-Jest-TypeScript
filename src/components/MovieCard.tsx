import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import vikram from "../assets/vikram.jpg";

interface Movie {
  id: number;
  desc: string;
  remove: (id: number) => void;
}

const MovieCard: FC<Movie> = ({ id, desc, remove }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-5" data-testid="card" >
      <Card.Img variant="top" src={vikram} />
      <Card.Body>
        <Card.Title>Vikram 2022</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button onClick={() => remove(id)} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
