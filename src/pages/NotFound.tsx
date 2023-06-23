import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="pb-10 text-3xl font-bold underline">Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
