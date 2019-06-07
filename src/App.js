import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const Home = props => {
  console.log(props);
  return <h1>Home</h1>;
};

const About = props => {
  console.log(props);
  return <h1>About</h1>;
};

const FAQ = () => {
  return <h1>FAQ</h1>;
};

const Content = ({ text }) => {
  return <h1>{text}</h1>;
};

const Movie = ({ match }) => {
  const movieId = Number(match.params.movieId);
  const movies = [{ id: 1, title: "Endgame" }, { id: 2, title: "Avengers" }];
  const movie = movies.find(m => m.id === movieId);

  return <h1>{movie && movie.title}</h1>;
};

function App() {
  const movieId = 1;

  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}`}>Movie</Link>
          </li>
        </nav>
        <main>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          {/* The reason why we use render in Route is to pass additional props */}
          <Route
            path="/content"
            render={() => <Content text="My awesome content" />}
          />
          <Route path="/movies/:movieId" component={Movie} />
        </main>
      </div>
    </Router>
  );
}

export default App;
