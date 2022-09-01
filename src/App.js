import React from 'react';
import { render } from 'react-dom';
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Ozzy" animal="cat" breed="Brazillian Short Hair" nickname="Mr. Fluffbottoms"/>
      <Pet name="Arthemis" animal="cat" breed="Brazillian Short Hair" nickname="Fofury"/>
      <Pet name="Blink" animal="cat" breed="Brazillian Short Hair" nickname="The Burgeouis"/>
    </div>
  )
}


render(<App/>, document.getElementById("root"));
