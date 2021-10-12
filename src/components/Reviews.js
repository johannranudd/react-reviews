import React, { useState } from 'react';
import Review from './Review';

const reviews = ({ data }) => {
  return (
    <>
      <section className='review-section'>
        {data.map((item) => {
          return <Review key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default reviews;
