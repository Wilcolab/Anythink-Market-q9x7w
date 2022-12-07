import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const onSearchChange = (e) => {
    let searchTerm = e.target.value.length;
    if (searchTerm >= 3) {
      props.onSearch(
        e.target.value,
        () => agent.Items.byTitle(e.target.value),
        agent.Items.byTitle(e.target.value)
      );
    }
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <form>
            <input
              id="search-box"
              type="text"
              name="title"
              placeholder="What is it that you truly desire?"
              style={{ width: "16rem" }}
              onChange={onSearchChange}
            />
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
