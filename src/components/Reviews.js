import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const prevReview = () => {
    setIndex((prevIndex) => {
      return prevIndex - 1;
    });
    if (index <= 0) {
      setIndex(data.length - 1);
    }
  };
  const nextReview = () => {
    setIndex((prevIndex) => {
      return prevIndex + 1;
    });
    if (index >= data.length - 1) {
      setIndex(0);
    }
  };

  const random = () => {
    setIndex((prevIndex) => {
      const randomNumber = Math.floor(Math.random() * data.length);
      prevIndex = randomNumber;
      return prevIndex;
    });
  };

  return (
    <>
      <section key={id} className='review-section'>
        <div className='headline'>
          <h1>Our Reviews</h1>
          <div className='underline'></div>
        </div>
        <article className='single-review'>
          <div className='image-container'>
            <img src={image} alt='' />
            <div className='quote-icon-container'>
              <FaQuoteRight className='quote-right' />
            </div>
          </div>
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{text}</p>
          <div className='btn-container'>
            <button onClick={prevReview}>
              <FiChevronLeft className='icon' />
            </button>
            <button onClick={nextReview}>
              <FiChevronRight className='icon' />
            </button>
          </div>
          <button className='random-btn' onClick={random}>
            surprise me
          </button>
        </article>
      </section>
    </>
  );
};

export default Reviews;
