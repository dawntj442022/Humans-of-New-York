const React = require("react");
const DefaultLayout = require("../Layout/Default");
class Edit extends React.Component {
  render() {
    const { title, _id, postToPublic, entry } = this.props.human;

    const backgroundImageStyle = {
      backgroundImage: `url('https://www.consigliamidove.it/wp-content/uploads/2019/04/New-York.jpeg')`,
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
      color: "black",
    };

    return (
      <DefaultLayout>
        <div style={backgroundImageStyle}>
          <div style={containerStyle}>
            <h1 className="	font-extrabold text-blue-500 text-center text-3xl underline bg-clip-text">
              Humans of New York: Blog Post
            </h1>
            {title}
            <form action={`/humans/${_id}?_method=PUT`} method="POST">
              Title: <input type="text" name="title" defaultValue={title} />
              <br />
              Entry: <input type="textarea" name="entry" defaultValue={entry} />
              <br />
              Post to Public:
              {postToPublic ? (
                <input type="checkbox" name="postToPublic " defaultChecked />
              ) : (
                <input type="checkbox" name="postToPublic " />
              )}
              <input type="submit" value="Submit Changes" />
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
