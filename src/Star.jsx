import React from 'react';
import {MdStar, MdStarBorder, MdStarHalf} from 'react-icons/md';
import PropTypes from 'prop-types';

/**
 * Clickable star. Should be a filled star when rating is equal to or greater than star's position.
 * @param {*} props 
 */
const Star = props => {

    Star.propTypes = {
        name: PropTypes.string,
        color: PropTypes.string
    }

    const STAR_ICONS = {
      full: <MdStar />,
      half: <MdStarHalf />,
      blank: <MdStarBorder />
    };

    return (    
        <div className="star" name={props.name} style={{"color": props.color}} onClick={props.onClick}>
            {STAR_ICONS[props.starType]}
        </div>  
        )
}

Star.defaultProps = {
    starType: "blank",
    name: "1"
}

export default Star;