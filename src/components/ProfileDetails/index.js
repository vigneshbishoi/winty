
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { BaseColor } from "../../config";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text } from '../../components/index'

export default function ProfileDetail(props) {
    const {
        image = "",
        textFirst = "",
        textSecond = "",
        textThird = '',
        icon = true,
        point = "",
        style = {},
        styleLeft = {},
        styleThumb = {},
        styleRight = {},
        onPress = () => { },
    } = props;



    return (
        <TouchableOpacity
            style={[styles.contain, style]}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <View style={[styles.contentLeft, styleLeft]}>
                <View>
                    <Image source={image} style={[styles.thumb, styleThumb]} />
                    <View
                        style={[styles.point, { backgroundColor: BaseColor.primary_dark }]}
                    >
                        <Text>
                            {point}
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: "flex-start" }}>
                    <Text semiBold extraStyle={{fontSize: 16}} numberOfLines={1}>
                        {textFirst}
                    </Text>
                    {textSecond && <Text
                        extraStyle={{
                            marginTop: 3,
                            paddingRight: 10,
                        }}
                        numberOfLines={1}
                    >
                        {textSecond}
                    </Text>}
                    <Text numberOfLines={1}>
                        {textThird}
                    </Text>
                </View>
            </View>
            {icon && (
                <View style={[styles.contentRight, styleRight]}>
                    <Icon
                        name="angle-right"
                        size={18}
                        color={'#9B9B9B'}
                        enableRTL={true}
                    />
                </View>
            )}
        </TouchableOpacity>
    );
}
