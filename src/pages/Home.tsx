import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1 className="title">Hello World</h1>
      <Link to="about">about</Link>
    </div>
  );
}

export default Home;
