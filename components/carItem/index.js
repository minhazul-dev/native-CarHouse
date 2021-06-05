import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'
const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;
    return (
        <View style={styles.carContainer}>

            <ImageBackground style={styles.img} source={image}></ImageBackground>

            <View style={styles.titles}>
                <Text style={styles.title}> {name}</Text>
                <Text style={styles.subtitle}> {tagline}</Text>
                <Text> {taglineCTA}</Text>
            </View>

            <View style={styles.btnContainer}>
                <StyledButton type="primary" content={"Order Now"} onPress={() => {
                }} />

                <StyledButton type="secondary" content={"Check Availability"} onPress={() => {
                }} />

            </View>

        </View>
    )
}

export default CarItem
