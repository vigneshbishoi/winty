import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { BaseColor } from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centerItem: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: BaseColor.primary_dark
    },
    title: {
        color : BaseColor.white,
        fontSize: 26
    },
    iconImage: {
        width:'100%',
        height:'100%'
    }
})

export default styles;
