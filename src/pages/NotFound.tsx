import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <h1 className="title">Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
