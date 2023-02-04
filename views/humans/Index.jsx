const React = require("react");
const Moment = require("moment");
const DefaultLayout = require("../Layout/Default");
const timestamp = Date.now();

const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();

class Index extends React.Component {
  render() {
    const { humans } = this.props;

    return (
      <DefaultLayout>
        <div>
          <h1 className="	font-extrabold text-blue-500 text-center text-3xl">
            Humans of New York
          </h1>
          <nav>
            <nav class="bg-gray-800 p-6">
              <ul class="flex justify-between items-center">
                <li>
                  <a class="text-white hover:text-gray-500" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-500" href="#">
                    Resources
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-500" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </nav>
            <a href="/humans/new">
              {" "}
              <button className="text-blue-500 font-bold underline text-left">
                Create a New Blog{" "}
              </button>
            </a>
            <br />
            <a href="/user/Logout">
              <button className="text-blue-500 font-bold underline  ">
                Logout
              </button>
            </a>
            <br />
            <br />
          </nav>
          <ul>
            {this.props.humans.map((human, i) => {
              return (
                <li key={i}>
                  <a href={`/humans/${human.id}`} className="text-blue-500">
                    {" "}
                    {human.title}{" "}
                  </a>
                  <br />
                  {human.entry}
                  {" - "}
                  <br />
                  {human.postToPublic
                    ? `Posted to the Public`
                    : `Not Posted to the Public`}
                  {Moment(human.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
                  <form
                    action={`/humans/${human._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input
                      type="submit"
                      value="DELETE"
                      className="text-blue-500"
                    />
                  </form>
                  <form action={`/humans/${human._id}/edit`} method="GET">
                    <input
                      type="submit"
                      value="UPDATE"
                      className="text-blue-500"
                    />
                  </form>
                </li>
              );
            })}
          </ul>
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
        <footer class="bg-gray-900 p-6 text-white">
          <p>Copyright © 2023. All rights reserved.</p>
        </footer>
      </DefaultLayout>
    );
  }
}
console.log(`${year}-${month}-${date}`);

module.exports = Index;
