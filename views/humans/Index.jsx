const React = require("react");

class Index extends React.Component {
  render() {
    const { humans } = this.props;

    return (
      <div>
        <h1>Humans of New York</h1>
        <nav>
          <a href="/humans/new">Create a New Blog</a>
        </nav>
        <ul>
          {this.props.humans.map((human, i) => {
            return (
              <li key={i}>
                The <a href={`/humans/${human.id}`}> {human.title} </a> is{" "}
                {human.entry}
                {" - "}
                <form
                  action={`/humans/${human._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <form action={`/humans/${human._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
