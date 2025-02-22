import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slides extends Component {
    renderLastSlide(index) {
        if(index === this.props.data.length - 1) {
            return (
                <View style={{ marginTop: 15 }}>
                    <Button 
                        title='Onwards!' 
                        raised 
                        buttonStyle={styles.buttonStyle} 
                        onPress={this.props.onComplete}
                    />
                </View>
            )
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => (
            <View 
                key={index} 
                style={[styles.slideStyle, { backgroundColor: slide.color }]}
            >
                <Text style={styles.textStyle}>{slide.text}</Text>
                {this.renderLastSlide(index)}
            </View>
        ))
    }

    render() {
        return (
            <ScrollView  
                horizontal 
                style={{ flex: 1 }} 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}
            >
                {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        padding: 30
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: '#0288D1'
    }
}

export default Slides