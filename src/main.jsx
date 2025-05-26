import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import StarRating from './StarRating';
import './index.css';
import App from './App.jsx';

function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setRating} />
      <p>your rate about this movie was {rating}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['very bad', 'bad', 'normal', 'good', 'very good']}/>
    <StarRating maxRating={10} color='red' size='24'/>
    <Test /> */}
  </StrictMode>
);
