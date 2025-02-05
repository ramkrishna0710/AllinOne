import { StatusBar, StyleSheet, useWindowDimensions, View, ViewToken } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Animated, { scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from 'react-native-reanimated'
import BackImage from '../../components/BackImage'
import TextInfo from '../../components/TextInfo'
import RenderItem from '../../components/RenderItem'
import WatchNowButton from '../../components/WatchNowButton'
import PlusButton from '../../components/PlusButton'
import Pagination from '../../components/Pagination'
import Gradient from '../../components/Gradient'
import { movies } from '../../utils/Movies'

const Curousel = () => {
  const [data, setData] = useState(movies)
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const x = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const interval = useRef<NodeJS.Timeout>();
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const offset = useSharedValue(0);

  const onViewableItemsChanged = ({ viewableItems, }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
      setPaginationIndex(viewableItems[0].index % movies.length)
    }
  }

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      x.value = e.contentOffset.x;
      // console.log(e.contentOffset.x);
    },
    onMomentumEnd: e => {
      offset.value = e.contentOffset.x;
    }
  });

  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true)
  })

  useEffect(() => {
    if (isAutoPlay) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width
      }, 4000);
    } else {
      clearInterval(interval.current)
    }
    return () => {
      clearInterval(interval.current)
    }
  }, [isAutoPlay, offset, width])

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      {
        data.map((item, index) => {
          return (
            <View key={index}>
              {currentIndex === index &&
                <BackImage index={index} item={item} x={x} />
              }
            </View>
          )
        })
      }
      <Gradient />
      <Animated.FlatList
        onScrollBeginDrag={() => {
          setIsAutoPlay(false)
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true)
        }}
        ref={ref}
        onScroll={onScroll}
        style={{ height: width * 0.6, flexGrow: 0 }}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReachedThreshold={0.5}
        onEndReached={() => setData([...data, ...movies])}
        data={data}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index} x={x} />
        }}
      />
      {
        data.map((item, index) => {
          return (
            <View key={index}>
              {currentIndex === index &&
                <TextInfo index={index} item={item} x={x} />
              }
            </View>
          )
        })
      }
      <View style={styles.btnContainer}>
        <WatchNowButton />
        <PlusButton />
      </View>
      <Pagination paginationIndex={paginationIndex} />
    </View>
  )
}

export default Curousel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1014'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14
  }
})