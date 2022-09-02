import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import MovieCardList from "./components/MovieCardList";

const App: FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {/* <Row className="mt-5">{movieList}</Row> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieCardList />}>
              {/* <Route index element={<Home />} />
              <Route path="teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
              </Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
};

export default App;
