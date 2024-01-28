import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { BaseColor } from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backButtonView: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 0,
        paddingHorizontal: 20,
    },
    saveButton: {
        fontSize: 16,
        color: BaseColor.primary_dark ,
        maxWidth: scale(45)
    },
    renderPress: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: BaseColor.border_silver
    },
    renderTitle: { fontSize: 16, fontWeight: '300' },
    renderSubTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: BaseColor.gray
    }
})

export default styles;
