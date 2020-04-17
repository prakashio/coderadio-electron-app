import React from "react";
import PropTypes from "prop-types";
import { isBrowser } from "react-device-detect";

const Main = props => {
  return (
    <main>
      {isBrowser && (
        <>
          <div className="animation saron" id="container" />
        </>
      )}
    </main>
  );
};

Main.propTypes = {
  fastConnection: PropTypes.bool,
  player: PropTypes.object,
  playing: PropTypes.bool
};

export default Main;
