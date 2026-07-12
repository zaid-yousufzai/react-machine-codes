import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counter2: 10,
    };

    console.log(this.props); //this will give undefined if i will not pass props in consturer as well as in super
  }
  render() {
    //const { name } = this.props; // here we can directer acces the props
    const name=this.props.name;
    console.log(this);
    return (
      <div>
        <h1>{name}</h1>
        <p>{this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
        <hr />

        <p>{this.state.counter2}</p>
        <button
          onClick={() => this.setState({ counter2: this.state.counter2 + 10 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter2: this.state.counter2 - 10 })}
        >
          -
        </button>
      </div>
    );
  }
}

export default ClassCounter;
