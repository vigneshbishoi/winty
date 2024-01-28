import React, { useEffect } from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Text from "../Text";

export default function Header(props) {
  const {
    style,
    styleLeft,
    styleContentLeft,
    styleContentCenter,
    styleRight,
    styleRightSecond,
    styleContentRight,
    title,
    subTitle = "",
    onPressLeft = () => {},
    onPressRight = () => {},
    onPressRightSecond = () => {},
    renderLeft = () => {},
    renderRightSecond = () => {},
    showrenderRightSecond = false,
    renderRight = () => {},
    textStyle = {},
  } = props;

  return (
    <View style={[styles.contain, style]}>
      <View style={[{ flex: 1 }, styleLeft]}>
        <TouchableOpacity
          style={[styles.contentLeft, styleContentLeft]}
          onPress={onPressLeft}
        >
          {renderLeft()}
        </TouchableOpacity>
      </View>
      <View style={[styles.contentCenter, styleContentCenter]}>
        <Text medium numberOfLines={1} extraStyle={[{fontSize: 16}, textStyle]}>
          {title}
        </Text>

        {subTitle != "" && (
          <Text regular numberOfLines={1}>
            {subTitle}
          </Text>
        )}
      </View>
      <View style={[styles.right, styleRight]}>
        {showrenderRightSecond && <TouchableOpacity
          style={[styles.contentRightSecond, styleRightSecond]}
          onPress={onPressRightSecond}
        >
          {renderRightSecond()}
        </TouchableOpacity>}
        <TouchableOpacity
          style={[styles.contentRight, styleContentRight]}
          onPress={onPressRight}
        >
          {renderRight()}
        </TouchableOpacity>
      </View>
    </View>
  );
}
