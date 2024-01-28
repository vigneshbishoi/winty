import Icon from "src/components/Icon";
import Text from "src/components/Text copy";
import { useTheme } from "src/config";
import React from "react";
import { TouchableOpacity } from "react-native";

const CheckBox = ({
  onPress = () => {},
  title = "",
  checkedIcon = "check-square",
  uncheckedIcon = "square",
  checked = true,
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center" }}
      onPress={onPress}
    >
      <Icon
        solid={checked}
        name={checked ? checkedIcon : uncheckedIcon}
        color={colors.text}
        size={24}
      />
      <Text body1 style={{ paddingHorizontal: 8 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
