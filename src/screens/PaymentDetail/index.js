
import { Text, Header, Button, PaymentItem } from '../../components/index'
import Icon from "react-native-vector-icons/FontAwesome5";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LayoutAnimation, Platform, UIManager, View, SafeAreaView } from "react-native";
import styles from "./styles";
import { AppData } from '../../../App';
import { BaseColor } from '../../config';
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const PaymentDetail = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const getAppContext = React.useContext(AppData)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: BaseColor.white }}
            edges={["right", "top", "left"]}
        >
            <Header
                title={"Payment"}
                renderLeft={() => {
                    return (
                        <Icon
                            name="angle-left"
                            size={20}
                            color={handleColor}
                            enableRTL={true}
                        />
                    );
                }}
                renderRight={() => (<Text medium numberOfLines={1} extraStyle={styles.saveButton}>{t("save")}</Text>)}
                onPressLeft={() => {
                    navigation.goBack();
                }}
                onPressRight={() => {
                    navigation.goBack();
                }}
            />

            <View style={{ padding: 20 }}>
                <View style={[styles.card, { backgroundColor: BaseColor.white }]}>
                    <View style={{ flex: 1 }}>
                        <Icon
                            name={"credit-card"}
                            size={40}
                            solid={true}
                            style={{ marginRight: 12, width: 48 }}
                            // color={'pink'}
                        />
                        <Text extraStyle={{ marginTop: 12 }}>
                            {"**** **** **** 1990"}
                        </Text>
                        <Text footnote light extraStyle={{ marginTop: 4 }}>
                            {t("expiries")} {"03/2020"}
                        </Text>
                    </View>
                    <View style={{ width: "100%", alignItems: "flex-end" }}>
                        <Text
                            footnote
                            darkPrimaryColor
                            extraStyle={{ marginTop: 4 }}
                        >
                            {t("primary")}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <Button
                    outline
                    loading={loading}
                    full
                    onPress={() => navigation.goBack()}
                >
                    Delete
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default PaymentDetail;
