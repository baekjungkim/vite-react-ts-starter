import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="pb-10 text-3xl font-bold underline">Hello world!</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
