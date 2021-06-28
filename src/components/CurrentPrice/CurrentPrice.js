import React from "react"
import { View, Text } from "react-native"

//styles
import styles from "./styles"

const CurrentPrice = () => {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 54423.355</Text>
            <Text style={styles.textPrice}>ultima cotacao</Text>
        </View>
    )
}

export default CurrentPrice