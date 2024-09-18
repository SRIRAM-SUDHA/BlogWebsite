import { Component } from "react";
import "./index.css";

class Home extends Component {
  state = { blogList: [] };
  componentDidMount() {
    this.getBlogData();
  }

  getBlogData = async () => {
    const options = {
      method: "GET",
    };
    const response = fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );

    const fetchedData = await (await response).json();

    this.setState({ blogList: fetchedData });
  };

  Blog = (item) => {
    const { title, body } = item;
    return (
      <div>
        <h1 className="listTitle">{title}</h1>
        <p>{body}</p>
      </div>
    );
  };

  heading = () => {
    return (
      <div className="header">
        <h1 className="Heding">Blog</h1>
      </div>
    );
  };

  render() {
    const { blogList } = this.state;
    return (
      <>
        {this.heading()}
        <ul className="listContainer">
          {blogList.map((item) => (
            <li className="liContainer" key={item.id}>
              {this.Blog(item)}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Home;
