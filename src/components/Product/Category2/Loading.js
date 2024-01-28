import React from "react";
import { PlaceholderLine, Placeholder } from "src/components";
import styles from "./styles";

const Loading = (props) => {
  const { style } = props;
  return (
    <Placeholder style={[style]}>
      <PlaceholderLine style={[styles.container]} noMargin />
    </Placeholder>
  );
};

export default Loading;
