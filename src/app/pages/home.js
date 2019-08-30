import React from 'react';
import ZoomingSlider from '../components/zooming-slider';

const slidesData = [
  { title: 'Hello', text: 'Hello', color: '#F00FFF' },
  { title: 'Hello1', text: 'Hello', color: '#F00FEE' },
  { title: 'Hello2', text: 'Hello', color: '#F00FDD' },
  { title: 'Hello3', text: 'Hello', color: '#F00FCC' },
  { title: 'Hello5', text: 'Hello', color: '#F00FBB' },
  { title: 'Hello6', text: 'Hello', color: '#F00FAA' }
];

const Home = () => (
  <div>
    <ZoomingSlider slides={slidesData} />
  </div>
);

export default Home;
