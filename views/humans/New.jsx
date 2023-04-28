const React = require("react");
const DefaultLayout = require("../Layout/Default");

class New extends React.Component {
  render() {
    const backgroundImageStyle = {
      backgroundImage: `url('https://www.nycgo.com/images/neighborhoods/496/central-park-mall-photo-christopher-postlewaite-nyc-and-company-0449__large.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
    };

    const containerStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      flexDirection: "column",
      color: "#fff",
    };
    return (
      <DefaultLayout>
        <div style={backgroundImageStyle}>
          <div style={containerStyle}>
            <h1 className="font-extrabold text-blue-500 text-center text-3xl underline big-clip-text">
              Humans of New York
            </h1>
            <br />
            <br />
            <h3 className="font-extrabold text-blue-500 text-center text-xl">
              Create New Post
            </h3>
            <img src="https://www.pexels.com/photo/architecture-art-clouds-landmark-290386/"></img>
            {}
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
