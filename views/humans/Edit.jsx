const React = require("react");

class Edit extends React.Component {
  render() {
    const { title, _id, postToPublic, entry } = this.props.human;

    return (
      <>
        <h1>{title} Humans of New York: Blog Post</h1>
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
      </>
    );
  }
}

module.exports = Edit;
