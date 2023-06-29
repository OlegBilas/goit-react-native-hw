import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}
