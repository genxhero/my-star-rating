import React from 'react';
import './stylesheets/App.scss';
import StarRating from './StarRating';

function App() {
  return (
    <div className="App">
        <StarRating color="blue" starCount={10}/>
    </div>
  );
}

export default App;
