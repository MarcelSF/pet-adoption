import { render } from 'react-dom';
// import Pet from "./Pet";
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  )
}


render(<App/>, document.getElementById("root"));
