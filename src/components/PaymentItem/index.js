import Icon from "react-native-vector-icons/FontAwesome5";
import { Text } from "..";
import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableHighlight, View } from "react-native";
import styles from "./styles";
import { BaseColor } from "../../config";

export default function PaymentItem({
  id = "**** **** **** 1989",
  expiryDate = "02/2020",
  iconName = "credit-card",
  isPrimary = false,
  onPress = () => {},
  style = {},
  textPrimary = ""
}) {
  const { t } = useTranslation();
  return (
      <TouchableHighlight
          // activeOpacity={0.6}
          underlayColor={'trtransparenta'}
          onPress={onPress}
      >
          <View
              style={[
                  styles.container,
                  { borderBottomColor: BaseColor.silver },
                  style,
              ]}
          >
              <Icon
                  name={iconName}
                  size={40}
                  solid={true}
                  style={{ marginRight: 12, width: 48 }}
                  color={BaseColor.black}
              />
              <View style={{ flex: 1 }}>
                  <Text headline semibold>
                      {id}
                  </Text>
                  <Text footnote light style={{ marginTop: 4 }}>
                      {expiryDate}
                  </Text>
              </View>
              {isPrimary && (
                  <Text footnote darkPrimaryColor>
                      {textPrimary || t("primary")}
                  </Text>
              )}
          </View>
      </TouchableHighlight>
  );
}
