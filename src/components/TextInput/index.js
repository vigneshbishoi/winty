import React from "react";
import { I18nManager, View } from "react-native";
import { BaseColor } from "../../config/colors";
import styles from "./styles";
import { TextInput } from 'react-native-paper';

export default function Header(props) {
  const {
    style = {},
    onChangeText = () => { },
    onFocus = () => { },
    onBlur = () => { },
    placeholder = "",
    value = "",
    success = true,
    secureTextEntry = false,
    keyboardType,
    multiline = false,
    textAlignVertical = "center",
    icon,
    onSubmitEditing = () => { },
    inputStyle = {},
    rightIconPress = () => { },
    rightIconShow = false,
    maxLength,
    ...attrs
  } = props;
  return (
    <View
      style={[styles.textInput, style, { shadowColor: "#fff", }]}
    >
      <TextInput
        style={[
          {
            flex: 1,
            //   height: "100%",
            //   paddingTop: 5,
            //   paddingBottom: 5,
            textAlign: I18nManager.isRTL ? "right" : "auto",
            backgroundColor: "transparent"
          },
          inputStyle,
        ]}
        onChangeText={(text) => onChangeText(text)}
        onFocus={() => onFocus()}
        autoCorrect={false}
        label={placeholder}
        underlineColor={success ? BaseColor.gray : BaseColor.placeHolder_error}
        placeholderTextColor={
          success ? BaseColor.gray : BaseColor.placeHolder_error
        }
        theme={{
          colors: {
            placeholder: success ? BaseColor.gray : BaseColor.placeHolder_error,
          }
        }}
        secureTextEntry={secureTextEntry}
        value={value}
        //   selectionColor={colors.primary}
        keyboardType={keyboardType}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        onSubmitEditing={onSubmitEditing}
        right={!rightIconShow ? null : value != "" ? <TextInput.Icon size={20} icon="close-circle" color={BaseColor.gray}
          onPress={() => { rightIconPress() }}
        /> : null}
        {...attrs}
        onBlur={()=> onBlur()}
        maxLength={maxLength}
      />
    </View>
  );
};