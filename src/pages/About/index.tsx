import { Link } from 'react-router-dom';
import AboutSection from './components/AboutSection';

function About() {
  return (
    <div className="container">
      <h2 className="title">About Page!</h2>
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <Link to="/" style={{ marginTop: '20px' }}>
        Go Home
      </Link>
    </div>
  );
}

export default About;
