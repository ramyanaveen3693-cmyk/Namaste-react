const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Iam h1 tag"), React.createElement("h2",{},"I am tag2")]))

const child2 = React.createElement("div",{id:"child2"},[React.createElement("h1",{},"iam h1 tag"),React.createElement("h2",{},"iam tag 2")])

root.render(parent)

