import * as React from "react"
import PropTypes from "prop-types"

function Circle({ text, arc, radius }) {
    const characters = text.split('');
    const degree = arc / characters.length;
  
    return (
      <h4>
        {characters.map((char, i) => (
          <span
            key={`circle-span-${i}`}
            style={{
              height: `${radius}px`,
              transform: `rotate(${degree * i - arc / 2}deg)`,
              transformOrigin: `0 ${radius}px 0`,
            }}>
            {char}
          </span>
        ))}
      </h4>
    );
  }
  
  Circle.propTypes = {
    text: PropTypes.string.isRequired,
    arc: PropTypes.number, // how curved do you want the text
    radius: PropTypes.number, // how big do you want the curve
  };
  
  Circle.defaultProps = {
    arc: 0,
    radius: 0,
  };
  
  export default Circle;