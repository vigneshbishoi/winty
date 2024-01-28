import { View, SafeAreaView, ScrollView, Image, FlatList, RefreshControl, LayoutAnimation, Platform, UIManager, KeyboardAvoidingView, Switch } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Text, Header, Button, PaymentItem, TextInput, MonthYearPicker } from '../../components/index'
import Icon from "react-native-vector-icons/FontAwesome5";
import { BaseColor } from '../../config';
import { AppData } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export const EPaymentItemsData = [
    {
        id: "**** **** **** 1989",
        expiryDate: "Expiries 02/2020",
        iconName: "credit-card",
    },
    {
        id: "**** **** **** 1990",
        expiryDate: "Expiries 03/2020",
        iconName: "paypal",
    },
    {
        id: "**** **** **** 1991",
        expiryDate: "Expiries 04/2020",
        iconName: "cc-mastercard",
    },
];

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


const Payment = () => {

    const navigation = useNavigation()
    const [add, setAdd] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [card, setCard] = useState("");
    const [isSave, setIsSave] = useState(false);
    const [digit, setDigit] = useState("");
    const [name, setName] = useState(""); // home or office
    const [success] = useState({
        street: true,
        city: true,
        postCode: true,
        country: true,
        contactName: true,
        email: true,
        phone: true,
    });
    const getAppContext = React.useContext(AppData)
    const { t } = useTranslation()
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color
    const handleColor = getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark;

    const onAdd = () => {
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setAdd(!add);
    };

    return (
        <SafeAreaView style={styles.container}>
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
                onPressLeft={() => {
                    navigation.goBack();
                }}
            />
            <View style={[styles.container, styles.mainView]}>
                {!add && (
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={true}
                        refreshControl={
                            <RefreshControl
                                // colors={handleColor}
                                tintColor={handleColor}
                                refreshing={refreshing}
                                onRefresh={() => { }}
                            />
                        }
                        data={EPaymentItemsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <PaymentItem
                                style={{ marginTop: 20 }}
                                id={item.id}
                                expiryDate={item.expiryDate}
                                iconName={item.iconName}
                                isPrimary={index == 0}
                                onPress={() => navigation.navigate("PaymentDetail")}
                            />
                        )}
                    />
                )}
                <Button
                    full
                    loading={false}
                    style={styles.confirm}
                    onPress={() => { onAdd() }}
                    styleText={{ fontSize: 18 }}
                >
                    {add ? 'Cancel' : '+ Add New'}
                </Button>
                {add && (
                    <KeyboardAvoidingView behavior={"height"}>
                        <ScrollView>
                            <View style={{ paddingVertical: 20, paddingTop: 0 }}>
                                <TextInput
                                    style={[styles.textInputView, styles.marginB10]}
                                    inputStyle={styles.textInput}
                                    onChangeText={(text) => setName(text)}
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    placeholder={'Name on card'}
                                    success={success.name}
                                    value={name}
                                // rightIconPress={() => setFirstName('')}
                                // rightIconShow={true}
                                />
                                <TextInput
                                    style={[styles.textInputView, styles.marginB10]}
                                    inputStyle={styles.textInput}
                                    onChangeText={(text) => setCard(text)}
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    placeholder={"Credit Card Number"}
                                    keyboardType="numeric"
                                    success={success.card}
                                    value={card}
                                // rightIconPress={() => setFirstName('')}
                                // rightIconShow={true}
                                />
                                <MonthYearPicker style={{ marginTop: 10 }} onChange={() => { }} />
                                <View
                                    style={{
                                        flexDirection: "row",
                                        marginTop: 10,
                                        alignItems: "center",
                                    }}
                                >
                                    <View style={{ flex: 3.5 }}>
                                        <TextInput
                                            onChangeText={(text) => setDigit(text)}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            placeholder={"3-Digit CCV"}
                                            success={success.digit}
                                            keyboardType="numeric"
                                            value={digit}
                                            style={{width: '50%'}}
                                        // rightIconPress={() => setFirstName('')}
                                        // rightIconShow={true}
                                        />
                                    </View>
                                    <View style={styles.digiNumber}>
                                        <View style={{ alignItems: "center", flexDirection: "row" }}>
                                            <Switch
                                                onValueChange={() => setIsSave((isSave) => !isSave)}
                                                value={isSave}
                                            />
                                            <Text style={{ marginLeft: 8 }} body1>
                                                {t("save")}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Payment