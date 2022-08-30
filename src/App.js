const Pet = () => {
  return(
    React.createElement("div", {}, [
      React.createElement("h1", {}, "Ozzy"),
      React.createElement("h2", {}, "Arthemis"),
      React.createElement("h2", {}, "Blink"),
      React.createElement("h1", {}, "Kloe")
    ])
  )
}

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt me!")
  );
};
ReactDOM.render(React.createElement(App), document.getElementById('root'))
