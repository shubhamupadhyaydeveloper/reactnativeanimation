import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { carouselMockData } from '../utils/mock';

const { width, height } = Dimensions.get('screen')

type carouselDataType = {
    item: typeof carouselMockData[0]
}

const _itemHeight = height * .72
const _spacing = 4;

function AnimatedCard({ item }: carouselDataType) {
    return (
        <View 
         style={{
            flex : 1,
            backgroundColor: 'white',
            padding : _spacing * 3,
            height : _itemHeight,
            borderRadius : 12,
         }}
        >
            <Image source={{uri : item}} style={[StyleSheet.absoluteFillObject,{borderRadius : 12}]} blurRadius={50} />
            <Image source={{uri : item}} style={{height : height * .6,width : "100%"}} />
            <View style={{marginTop : 5}}>
                 <Text style={{fontSize : 24, fontWeight : 'bold',color : 'white'}}>Hi this is Title</Text>
                 <Text style={{color : 'white'}} numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci doloremque, amet laborum, nesciunt atque rem vero minus iste reiciendis repellendus inventore aspernatur molestias blanditiis nostrum? Voluptatum at sed beatae?</Text>
            </View>
        </View>
    )
}

const CarouselScreen = () => {
    return (
        <View style={styles.parentContainer}>
            <FlatList
                data={carouselMockData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <AnimatedCard item={item} />}
                contentContainerStyle={{
                     padding : _spacing * 3,
                     gap : _spacing * 3
                }}
                snapToInterval={height - _itemHeight + _spacing * 12}
            />
        </View>
    )
}

export default CarouselScreen;

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: 'black',

    }
})