import React from 'react'
import './Image.css'
const Image = () => {
  return (
    <div className="image-container">
      <img
        src="https://www.cihi.ca/sites/default/files/image/physicians-in-canada-2020-en-prod-pg.svg"
        className="image"
        alt="Medical"
      />
    </div>
  );
}

export default Image