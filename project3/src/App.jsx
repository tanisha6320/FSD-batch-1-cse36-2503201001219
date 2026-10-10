import React from "react";

function add(a,b){
  return a + b;
}
function Welcome(){
  return <h2>Welcome to my first React Component</h2>
}
function Info(){
  return (
    <div>
      <h3>What is a Component</h3>
      <p>A component is a reusable piece of UI in React.</p>
    </div>
  );
}
function App(){

  return(
    <div style={{padding:"20px",fontFamily: "Arial" }}>
      <h1> Your First React Component</h1>
      <Welcome/>
      <Info />
      <h3> How to use Component?</h3>
      <p>Use Component like HTML tag:glt;Welcome /glt;</p>

      <h3>Difference between function and Component</h3>
      <p> Normal Function Result: {add(10,20)}</p>

      <h3> Interview Question</h3>
      <p>Q: What is a React Component?</p>
      </div>
  );}
  export default App;