import React from "react";
import { PlaceholderLine, Placeholder } from "src/components";
import styles from "./styles";

const Loading = (props) => {
  const { style } = props;
  return (
    <Placeholder style={[styles.containLoading, style]}>
      <PlaceholderLine
        width={100}
        height={100}
        noMargin
        style={styles.loading}
      />
    </Placeholder>
  );
};

export default Loading;
