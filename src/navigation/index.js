import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignIn/index'
import SignUpScreen from '../screens/SignUp/index'
import HomeScreen from '../screens/Home/index'
import ProfileScreen from '../screens/Profile/index'
import ForgotScreen from '../screens/Forgot/index'
import SettingScreen from '../screens/Setting/index'
import SplashScreen from '../screens/Splash/index'
import QrscanScreen from '../screens/Qrscan/index'
import LanguageScreen from '../screens/Language/index'
import ProfileEditScreen from '../screens/ProfileEdit';
import PaymentScreen from '../screens/Payment';
import PaymentDetailScreen from '../screens/PaymentDetail';
import ChangePasswordScreen from '../screens/Change_Password/index'
import ProducttDetailScreen from '../screens/ProductDetail/index'
import ProductScreen from '../screens/Product/index'
import FilterScreen from '../screens/Filter/index'
import ReviewScreen from '../screens/Review/index'
import CustomerReviewScreen from '../screens/CustomerReviews/index'
import PreviewImageScreen from '../screens/PreviewImage/index'
import CartScreen from '../screens/Cart/index'
import ShippingScreen from '../screens/Shipping/index'
import OTPScreen from '../screens/OTP';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AppData } from '../../App';
import { BaseColor } from '../config';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Qrscan' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Qrscan" component={QrscanScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="HomeBottom" component={BottomTabNavigator} />
                <Stack.Screen name="Forgot" component={ForgotScreen} />
                <Stack.Screen name="Language" component={LanguageScreen} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
                <Stack.Screen name="Otp" component={OTPScreen} />
                <Stack.Screen name="Setting" component={SettingScreen} />
                <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen name="PaymentDetail" component={PaymentDetailScreen} />
                <Stack.Screen name="ProductDetail" component={ProducttDetailScreen} />
                <Stack.Screen name="Filter" component={FilterScreen} />
                <Stack.Screen name="Review" component={ReviewScreen} />
                <Stack.Screen name="CustomerReview" component={CustomerReviewScreen} />
                <Stack.Screen name="PreviewImage" component={PreviewImageScreen} />
                <Stack.Screen name="Shipping" component={ShippingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;

const BottomTabNavigator = (props) => {

    const getAppContext = React.useContext(AppData)
    let getAppButtonBG = getAppContext?.partner_app?.app_config?.btn_bg_color

    return (
        <BottomTab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
            tabBarOptions={{
                showIcon: true,
                showLabel: true,
                activeTintColor: getAppButtonBG ? getAppButtonBG : BaseColor.primary_dark,
                inactiveTintColor: "#9B9B9B",
                style: {
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                },
                labelStyle: {
                    fontSize: 12,
                },
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => {
                        return <Icon name="inbox" size={20} solid color={color} />;
                    },
                }}
            />

            <BottomTab.Screen
                name="Product"
                component={ProductScreen}
                options={{
                    title: "Product",
                    tabBarIcon: ({ color }) => {
                        return <Icon name="th-large" size={20} solid color={color} />;
                    },
                }}
            />

            {/* <BottomTab.Screen
                name="News"
                component={HomeScreen}
                options={{
                    title: "News",
                    tabBarIcon: ({ color }) => {
                        return <Icon name="book" size={20} solid color={color} />;
                    },
                }}
            /> */}

            <BottomTab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => {
                        return (
                            <View>
                                <Icon
                                    solid
                                    name="shopping-cart"
                                    size={20}
                                    color={color}
                                />
                                {/* <View
                                    style={{
                                        borderWidth: 1,
                                        borderColor: 'silver',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "absolute",
                                        width: 20,
                                        height: 20,
                                        backgroundColor: "red",
                                        top: -5,
                                        right: -12,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Text whiteColor caption2>
                                        3
                                    </Text>
                                </View> */}
                            </View>
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "Account",
                    tabBarIcon: ({ color }) => {
                        return <Icon solid name="user-circle" size={20} color={color} />;
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};
