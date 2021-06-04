import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'
const CarItem = () => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground style={styles.img} source={require('../../assets/images/ModelX.jpeg')}></ImageBackground>

            <View style={styles.titles}>
                <Text style={styles.title}> Model/s</Text>
                <Text style={styles.subtitle}> Starting at 1546646</Text>
            </View>

            <StyledButton type="primary" content={"Order Now"} onPress={() => {
            }} />

            <StyledButton type="secondary" content={"Check Availability"} onPress={() => {
            }} />
        </View>
    )
}

export default CarItem
