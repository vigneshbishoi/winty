import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { BaseColor } from '../../config'

export default function Index(props) {

    const {
        children,
        extraStyle = {},
        bold,
        semiBold,
        medium,
        regular,
        light,
        numberOfLines = 10
    } = props

    const fontStyles = [bold && styles.boldText,
    semiBold && styles.semiBoldText,
    medium && styles.mediumText,
    regular && styles.regularText,
    light && styles.lightText]

    return (
        <Text style={[{ color: BaseColor.black }, styles.lightText, fontStyles,
            extraStyle]} numberOfLines={numberOfLines}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    boldText: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
    },
    semiBoldText: {
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
    },
    mediumText: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
    },
    regularText: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    lightText: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    }
})