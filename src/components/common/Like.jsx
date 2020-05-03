import React  from "react";

const Like=(props)=> {
  let classes = "fa fa-heart";
  classes = props.Liked === true ? (classes += "") : (classes += "-o");
  return (
    <li
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.LikeToggle}
    />
  );
}
export default Like;