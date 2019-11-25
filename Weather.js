import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { weatherConditions } from './conditions';

export default class Weather extends Component {
    render() {
        const weatherCondition = this.props.weatherCondition;
        const temperature = this.props.temperature;

        return (
            <View
                style={[
                    styles.weatherContainer,
                    { backgroundColor: weatherConditions[weatherCondition].color }
                ]}
            >
                <View style={styles.headerContainer}>
                    <MaterialCommunityIcons
                        size={72}
                        name={weatherConditions[weatherCondition].icon}
                        color={'#fff'}
                    />
                    <Text style={styles.tempText}>{temperature}˚</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{weatherConditions[weatherCondition].title}</Text>
                    <Text style={styles.subtitle}>
                        {weatherConditions[weatherCondition].subtitle}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#f7b733'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempText: {
        fontSize: 48,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});
