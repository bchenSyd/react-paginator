import React, { useState } from "react";
import styled from 'styled-components';
import { Flyout } from "./index";

const 
export default { component: Flyout, title: "Flyout" };

export const Basic = () => {
  const [showFlyout, setShowFlyout] = useState(false);
  return (
    <>
      <h2>flyout example</h2>
      <button onClick={() => setShowFlyout(true)}>click me</button>
      {showFlyout && (
        <Flyout onClose={() => setShowFlyout(false)}>
          <h1>your content goes here</h1>
        </Flyout>
      )}
    </>
  );
};
