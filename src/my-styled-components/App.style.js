import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  max-width: 1200px;

  position: relative;
  .review-section {
    display: grid;
    place-items: center;
    .single-review {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      margin: 1rem;
      background-color: #def;
      .image-container {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h3 {
        margin: 0;
        padding: 0;
      }
      h4 {
        margin: 0;
      }
    }
  }
`;
