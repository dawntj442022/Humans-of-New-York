const React = require("react");
const Moment = require("moment");

const timestamp = Date.now();

const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();

class Index extends React.Component {
  render() {
    const { humans } = this.props;

    return (
      <div>
        <h1>Humans of New York</h1>
        <nav>
          <a href="/humans/new">Create a New Blog</a>
          <a href="/user/Logout">
            <button className="">Logout</button>
          </a>
        </nav>
        <ul>
          {this.props.humans.map((human, i) => {
            return (
              <li key={i}>
                <a href={`/humans/${human.id}`}> {human.title} </a>
                {human.entry}
                {" - "}
                {human.postToPublic
                  ? `Posted to the Public`
                  : `Not Posted to the Public`}

                <form
                  action={`/humans/${human._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <form action={`/humans/${human._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form>
                {Moment(human.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
console.log(`${year}-${month}-${date}`);

module.exports = Index;
