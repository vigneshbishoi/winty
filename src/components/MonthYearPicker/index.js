import { Text } from "..";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./styles";

export default function MonthYearPicker(props) {
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const { style, onChange, date = new Date() } = props;

    const openModal = () => {
        setModalVisible(true);
    };

    const handleDatePicked = (date) => {
        onChange(date);
        setModalVisible(false);
    };

    const hideDateTimePicker = () => {
        setModalVisible(false);
    };

    return (
        <View
            style={[
                styles.contentPickDate,
                { backgroundColor: 'white' },
                style,
            ]}
        >
            <DateTimePickerModal
                isVisible={modalVisible}
                mode="date"
                date={date}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
            />
            <TouchableOpacity
                style={styles.itemPick}
                onPress={() => openModal()}
            >
                <Text caption1 light style={{ marginBottom: 5 }}>
                    {t("month")}
                </Text>
                <Text headline semibold>
                    {moment(date).format("MM")}
                </Text>
            </TouchableOpacity>
            <View
                style={[styles.linePick, { backgroundColor: 'silver' }]}
            />
            <TouchableOpacity
                style={styles.itemPick}
                onPress={() => openModal()}
            >
                <Text caption1 light style={{ marginBottom: 5 }}>
                    {t("year")}
                </Text>
                <Text headline semibold>
                    {moment(date).format("YYYY")}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

MonthYearPicker.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
};

MonthYearPicker.defaultProps = {
    style: {},
    onChange: () => { },
};
