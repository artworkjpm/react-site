import React from "react";

//click 1 will fireoff before component has mounted because of this.handClick1()
//click 2 will error because it was not binded, after binding, it works
//click 3 is being declared as click 1, alerts
//click 4 uses an arrow function which automaticallly binds the this, so it alerts correcly.

class AppTesting extends React.Component {
  constructor() {
    super();
    this.name = "MyComponent";
    this.handleClick2 = this.handleClick1.bind(this);
  }
  handleClick1() {
    alert(this.name);
  }
  handleClick3 = () => alert(this.name);
  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1.bind(this)}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}

export default AppTesting;
