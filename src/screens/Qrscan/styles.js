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
        backgroundColor: BaseColor.white
    },
    qrContainer: {
        backgroundColor: BaseColor.black,
        borderRadius: 12,
        marginTop: 75,
        alignSelf: 'center'
    }
})

export default styles;
