const React = require("react");
const DefaultLayout = require("../Layout/Default");

class New extends React.Component {
  render(
    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Eomr4ieorbuArVe_r9aKaN7-gXbGk13bJGySKf-GWIk166_ZN-IQuuhwRV10z8o-ne8&usqp=CAU"
  ) {
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
