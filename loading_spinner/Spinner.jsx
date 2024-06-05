import React from "react";
import { css } from "@emotion/core";
import './cofee.css';

const override = css`
  margin: 0;
  position: absolute;
  top: 48%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // Simulate content loading by setting loading to false after 2 seconds
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    return (
      <div className="sweet-loading">
        <CircleLoader
          css={override}
          size={120}
          color={"Orange"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;
