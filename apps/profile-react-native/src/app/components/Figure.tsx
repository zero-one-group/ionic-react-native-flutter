import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface FigureProps {
  count: string | number;
  title: string;
  background?: string;
}

const FigureContainer: React.FC<FigureProps> = (props) => {
  return (
    <View style={[styles.figure, { backgroundColor: props.background || '#9da38d' }]}>
      <Text style={styles.count}>
        {props.count}
      </Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  figure: {
    padding: 18,
    alignContent: 'center',
    flex: 1,
  },
  count: {
    textAlign: 'center',
    fontSize: 24,
    color: Colors.lighter,
    fontWeight: '300',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.lighter,
    fontWeight: '300',
  },
  row1: {
    backgroundColor: '#9da38d'
  },
  row2: {
    backgroundColor: '#969b8a'
  },
  row3: {
    backgroundColor: '#878f78'
  },
});

export default FigureContainer;
