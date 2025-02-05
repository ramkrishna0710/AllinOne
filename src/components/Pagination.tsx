import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dot from './Dot'
import { movies } from '../utils/Movies';

type Props = {
    paginationIndex: number;
}

const Pagination = ({paginationIndex}: Props) => {
  return (
    <View style={styles.container}>
      {movies.map((_, index) => {
        return <Dot index={index} key={index} paginationIndex={paginationIndex} />
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})