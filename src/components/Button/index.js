import Text from "../Text/index";
import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";
import { BaseColor } from "../../config/colors";
import { AppData } from "../../../App";

export default function Button(props) {
  const {
    style = {},
    styleText = {},
    icon = null,
    outline,
    full = false,
    round = false,
    loading = false,
    children,
    ...rest
  } = props;
  const getAppContext = useContext(AppData)
  let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
  let getAppButtonTextColor = getAppContext?.partner_app?.app_config?.btn_text_color

  return (
    <TouchableOpacity
      {...rest}
      style={StyleSheet.flatten([
        [styles.default, { backgroundColor: BaseColor.primary_dark}],
        full && styles.full,
        round && styles.round,
        style,
        getAppButtonBG && { backgroundColor: getAppButtonBG }
      ])}
      activeOpacity={0.9}
    >
      {icon ? icon : null}
      <Text medium
        extraStyle={[
          styles.textDefault,
          styleText,
          getAppButtonTextColor && { color: getAppButtonTextColor }
        ]}
        numberOfLines={1}
      >
        {children}
      </Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={BaseColor.white}
          style={{ paddingLeft: 5 }}
        />
      ) : null}
    </TouchableOpacity>
  );
}
