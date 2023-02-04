const React = require("react");
const DefaultLayout = require("../Layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <h1 className="font-extrabold text-blue-500 text-center text-3xl underline big-clip-text">
            Humans of New York
          </h1>
          <br />
          <br />
          <h3 className="font-extrabold text-blue-500 text-center text-xl">
            Create New Post
          </h3>

          {/* NOTE: action will be the route, method will be the HTTP verb */}
          <form action="/humans" method="POST">
            Title: <input className="text-center" type="text" name="title" />
            <br />
            Entry:{" "}
            <input type="textarea" name="entry" className="text-center" />
            <br />
            Post to Public:{" "}
            <input
              type="checkbox"
              name="postToPublic"
              className="text-center"
            />
            <input
              type="date"
              name=""
              value="Create Date"
              className="text-center"
            />
            <br />
            <input
              type="submit"
              name=""
              value="Create Blog"
              className="table-cell text-blue-500 text-center"
            />
            <br />
          </form>
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FRME1ER%2Fsubway-in-new-york-city-photo-from-the-80s-RME1ER.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fsubway-in-new-york-city-photo-from-the-80s-image236336431.html&tbnid=s-YVYdqNjIbxjM&vet=10CAUQMyhqahcKEwigvIWX_vr8AhUAAAAAHQAAAAAQCQ..i&docid=XUxBBeeVuBtCxM&w=1300&h=1110&q=photos%20of%20new%20york%20city%20subway%20in%20the%201980%27s&ved=0CAUQMyhqahcKEwigvIWX_vr8AhUAAAAAHQAAAAAQCQ"
            alt=""
          ></img>
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

module.exports = New;
