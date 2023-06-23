import { Link } from 'react-router-dom';
import AboutSection from './components/AboutSection';

function About() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <h2 className="pb-10 text-3xl font-bold underline">About Page!</h2>
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <Link to="/" className="pt-10">
        Go back
      </Link>
    </div>
  );
}

export default About;
