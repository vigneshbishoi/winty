import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { BaseColor } from "../../config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BaseColor.white
    },
    ///FlatList Styles
    flatListStyle: {
        paddingHorizontal: scale(20)
    },
    paddingSrollView: { paddingVertical: 20 },
    paddingFlatList: {
        paddingTop: 8,
    },
    viewStore: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 4,
    },
    countryImg: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 2,
    },
    bannerMargin: { height: 15 },
    viewPadding: { paddingHorizontal: 20 }
})

export default styles;
