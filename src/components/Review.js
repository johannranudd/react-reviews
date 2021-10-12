import React, { useState } from 'react';

const Review = ({ id, name, job, image, text }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <article className='single-review'>
        <div className='image-container'>
          <img src={image} alt='' />
        </div>
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
        <div className='btn-container'>
          <button onClick={() => setCounter(counter - 1)}>prev</button>
          <button onClick={() => setCounter(counter + 1)}>next</button>
        </div>
        <button>surprise btn</button>
      </article>
    </>
  );
};

export default Review;
