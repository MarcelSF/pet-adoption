/* global React ReactDOM*/ const Pet = (props)=>{
    return React.createElement("div", {
        id: "pet"
    }, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
        React.createElement("h2", {}, props.nickname), 
    ]);
};
const App = ()=>{
    return React.createElement("div", {
        id: "outer-div"
    }, [
        React.createElement("h1", {
            id: "Brand"
        }, "Adopt me!"),
        React.createElement(Pet, {
            name: "Ozzy",
            animal: "Cat",
            breed: "Brazilian short Hair",
            nickname: "Lord Fluffbottoms"
        }),
        React.createElement(Pet, {
            name: "Arthemis",
            animal: "Cat",
            breed: "Brazilian short Hair",
            nickname: "Fofury"
        }),
        React.createElement(Pet, {
            name: "Blink",
            animal: "Cat",
            breed: "Siamese",
            nickname: "Captain"
        }),
        React.createElement(Pet, {
            name: "Kloe",
            animal: "Cat",
            breed: "Brazilian Long Hair",
            nickname: "The Bandit"
        }), 
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.9e7b1db9.js.map
