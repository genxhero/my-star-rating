import React, {useState, useEffect} from 'react';
import Star from './Star';
import PropTypes from 'prop-types'

const StarRating = props => {
    const {color, starCount} = props;
    const [currentRating, setRating ] = useState(0);
    

    const handleClick = (e) => {
        console.log("clicking")
        setRating(parseInt(e.target.name))
    }

    return (
      <div className="star-rating" onClick={() => console.log("clicking outer div")}>
          <h1 onClick={console.log("THANK YOU FOR CLICKING")}>CLICK ME</h1>
        <Star color={color} name="1" onClick={e => handleClick} starType={currentRating >= 1 ? "full" :"blank"} />
        <Star color={color} name="2" onClick={handleClick} starType={currentRating >= 2 ? "full" :"blank"} />
        <Star color={color} name="3" onClick={handleClick} starType={currentRating >= 3 ? "full" :"blank"}/>
        <Star color={color} name="4" onClick={handleClick} starType={currentRating >= 4 ? "full" :"blank"}/>
        <Star color={color} name="5" onClick={handleClick} starType={currentRating >= 5 ? "full" :"blank"}/>
        {
           starCount > 5 && 
           <div>
                <Star color={color} name="6" onClick={handleClick} starType={currentRating >= 6 ? "full" :"blank"} />
                <Star color={color} name="7" onClick={handleClick} starType={currentRating >= 7 ? "full" :"blank"} />
                <Star color={color} name="8" onClick={handleClick} starType={currentRating >= 8 ? "full" :"blank"}/>
                <Star color={color} name="9" onClick={handleClick} starType={currentRating >= 9 ? "full" :"blank"}/>
                <Star color={color} name="10" onClick={handleClick} starType={currentRating >= 10 ? "full" :"blank"}/>
            </div>
        }
      </div>
    );
}

StarRating.defaultProps = {
    color: "blue",
    starCount: 5
}

export default StarRating;