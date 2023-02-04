const React = require("react");

class Signup extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <h1 className="font-extrabold text-blue-500 text-center text-3xl underline big-clip-text">
            Humans of New York
          </h1>
          <h3 className="font-extrabold text-blue-500 text-center text-xl">
            Signup
          </h3>

          <form action="/user/signup" method="POST">
            Name: <input type="text" defaultValue="" name="username" required />
            Password:{" "}
            <input type="password" defaultValue="" name="password" required />
            <input type="submit" name="" value="Signup" />
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer class="bg-gray-900 p-6 text-white">
          <p>Copyright © 2023. All rights reserved.</p>
        </footer>
      </DefaultLayout>
    );
  }
}

module.exports = Signup;
