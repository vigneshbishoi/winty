import React from "react";
import { PlaceholderLine, Placeholder } from "src/components";
import styles from "./styles";

const Loading = (props) => {
  const { style } = props;
  return (
    <Placeholder style={[styles.container, style]}>
      <PlaceholderLine style={[styles.imageBackground]} noMargin />
    </Placeholder>
  );
};

export default Loading;
