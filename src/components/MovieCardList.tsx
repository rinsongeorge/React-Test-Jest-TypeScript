import { FC, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieCardList: FC<any> = (props) => {
  const [list, setList] = useState<{ id: number; desc: string }[]>([]);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 14; i++) {
      arr.push({
        id: i,
        desc: "A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved.",
      });
    }
    setList(arr);
  }, []);

  const remove = (id: number) => {
    setList(list.filter((l) => l.id !== id));
  };
  
  let movieList = list.map((movie) => {
    return (
      <Col key={movie.id} className="p-2">
        <MovieCard {...movie} remove={remove} />
      </Col>
    );
  });

  return <Row>{movieList}</Row>;
};

export default MovieCardList;
