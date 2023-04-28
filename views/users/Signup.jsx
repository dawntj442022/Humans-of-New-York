const React = require("react");

class Signup extends React.Component {
  render() {
    const backgroundImageStyle = {
      backgroundImage: `url('https://i0.wp.com/newyorksimply.com/wp-content/uploads/2022/06/CentralPark-1485.jpg?fit=1800%2C1200&ssl=1')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      flexDirection: "column",
    };

    return (
      <div style={backgroundImageStyle}>
        <div style={containerStyle}>
          <h1> Humans of New York</h1>
          <h3>Signup</h3>

          <form action="/user/signup" method="POST">
            Name: <input type="text" defaultValue="" name="username" required />
            Password:{" "}
            <input type="password" defaultValue="" name="password" required />
            <input type="submit" name="" value="Signup" />
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Signup;
