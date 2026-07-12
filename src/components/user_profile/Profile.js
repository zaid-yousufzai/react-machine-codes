import { Component } from "react";

const user = {
  name: "Jane Doe",
  bio: "Frontend developer who loves React and coffee ☕️",
  image: "https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg",
};

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { show } = this.state;

    return (
      <section>
        <h2>{user.name}</h2>

        <img src={user.image} alt={user.name} width="200" />

        <br />
        <br />

        <button onClick={this.handleToggle}>
          {show ? "Hide Bio" : "Show Bio"}
        </button>

        {show && <p>{user.bio}</p>}
      </section>
    );
  }
}

export default Profile;