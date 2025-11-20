import './App.scss';
import ColorBends from './ColorBends/ColorBends.js';
import Beams from './Beams/Beams.js';

function App() {

  return (
    <div className="App">
      <div className="App-beams-wrapper">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor={'#fff'}
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
          <div className="App-content">
            <div className="App-content-left">
              <h1 className="App-content-title">Zhigmytov Timur</h1>
              <p>Software Engineer</p>
              <p className="App-content-left-stack">Stack: JAMstack, Strapi, EDS AEM, Shopify, GSAP, React/Next.js, Muban</p>
              <p className="App-content-left-link"><a href="mailto:timur@zhigmytov.com">Work</a></p>
              <p className="App-content-left-link"><a href="mailto:timur@zhigmytov.com">Changelog</a></p>
              <p className="App-content-left-link"><a href="mailto:timur@zhigmytov.com">jyggiz@gmail.com</a></p>
            </div>
            <div className="App-content-right">
              <p>I’m a creative who’s highly experienced in creating creative digital brand experiences - from concept to production. I’m specialized in making people part of a narrative through interactivity, no matter if it’s through a website, installation, mixed reality or other form. </p>
              <p>I find passion in making perspective-shifting projects, that are well researched, thoroughly crafted and made to leave a positive impact.</p>
              <p>I will be available for freelance services at <span style={{ textDecoration: 'underline' }}>January 2026</span>. I am always looking to collaborate on projects on the topics that matter to me most: climate, ecology and culture. </p>
            </div>
          </div>
    </div>
  );
}
export default App;
