import React, { Fragment } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'

//styles
import styles from './styles'

const QuotationList = () => {
    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text
                        style={styles.textButtonQuery}
                    >
                        7D
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text
                        style={styles.textButtonQuery}
                    >
                        15D
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text
                        style={styles.textButtonQuery}
                    >
                        1M
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text
                        style={styles.textButtonQuery}
                    >
                        3M
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonQuery}
                    onPress={() => { }}
                >
                    <Text
                        style={styles.textButtonQuery}
                    >
                        6M
                    </Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}

export default QuotationList