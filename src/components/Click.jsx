import React from "react";

export default (props) => {
  var getitem = window.localStorage.getItem("clickcounter");
  var clicks = isNaN(getitem) ? 0 : parseInt(getitem);
  function click() {
    clicks += 1;
    document.getElementById("counter").innerHTML = clicks;
    window.localStorage.setItem("clickcounter", clicks);
  }
  return (
    <button type="button" onClick={() => click()}>
      Click Me!
    </button>
  );
};
