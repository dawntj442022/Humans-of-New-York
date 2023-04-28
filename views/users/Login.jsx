const React = require("react");

class Login extends React.Component {
  render() {
    const backgroundImageStyle = {
      backgroundImage: `url('https://cdn.cityandstateny.com/media/img/cd/2022/01/14/nyc_subway_Gary_HershornGetty_Images/860x394.jpg')`,
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
          <h3>Login</h3>
          <a href="/user/signup">
            <h3>Signup</h3>
          </a>
          <form action="/user/login" method="POST">
            Name: <input type="text" defaultValue="" name="username" required />
            Password:{" "}
            <input type="password" defaultValue="" name="password" required />
            <input type="submit" name="" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Login;
