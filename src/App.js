import Reviews from './components/Reviews';
import { StyledMain } from './my-styled-components/App.style';
import data from './components/data';

function App() {
  return (
    <StyledMain>
      <Reviews data={data} />
    </StyledMain>
  );
}

export default App;
