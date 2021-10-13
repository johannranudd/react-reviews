import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  max-width: 1200px;

  position: relative;
  .review-section {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    .headline {
      text-align: center;
      h1 {
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 0;
      }
      .underline {
        height: 5px;
        width: 15%;
        margin: auto;
        background-color: #49a6e9;
        margin-bottom: 2rem;
      }
    }

    .single-review {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      /* position: relative; */

      width: 350px;
      padding: 1rem;
      margin: 1rem;
      background-color: #fff;
      box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
      border-radius: 5px;
      @media (min-width: 600px) {
        width: 550px;
      }
      @media (min-width: 800px) {
        width: 600px;
      }

      .image-container {
        position: relative;

        width: 150px;
        height: 150px;
        /* overflow: hidden; */
        border-radius: 50%;
        margin: 1rem;
        background-color: #49a6e9;
        z-index: 0;
        .quote-icon-container {
          position: absolute;

          background: #49a6e9;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          display: grid;
          place-items: center;
          z-index: 999;
          color: white;
        }
        img {
          position: absolute;
          top: 7px;
          right: 7px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          z-index: 0;
        }
      }
      h3 {
        margin: 0;
        text-transform: capitalize;
      }
      h4 {
        margin: 0;
        font-weight: 300;
        color: #49a6e9;
      }
      p {
        height: 110px;
        color: #617d98;
        @media (min-width: 600px) {
          height: 75px;
        }
      }
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        color: #49a6e9;
      }
      .btn-container {
        margin-bottom: 1rem;
      }
      .icon {
        font-size: 1.6rem;
        &:hover {
          opacity: 0.7;
        }
      }
      .random-btn {
        background-color: #ebf7ff;
        padding: 0.5rem;
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
          background-color: #49a6e9;
          color: #fff;
        }
      }
    }
  }
`;
