const parent = React.createElement(
    "div",
    {id:"parent"}, 
    [
    React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h3", {}, "I am h3 tag")
        ]
    ),
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h3", {}, "I am h3 tag")
        ]
    )
]
)

console.log(parent);

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);