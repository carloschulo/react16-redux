import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome</p>
      <button onClick={() => props.changePage()}>About page via redux</button>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Home);
