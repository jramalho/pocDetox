/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [apertei, setApertei] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View testID='welcome'>
              <Text testID='oi'>{'OIII'}</Text>
            </View>
            <View>
              <Image
                testID='dioguinho'
                source={{uri: 'https://ca.slack-edge.com/T03JS3WQ9-U016V5579R8-72d90330e5f8-512'}}
                style={{width: 200, height: 200}}
              />
            </View>
            <TouchableOpacity 
              onPress={() => setApertei(true)}
              testID='apertei'
              style={{
                width: 50, height: 50, borderRadius: 20, backgroundColor: 'brown',
              }}
            />
            {apertei && <View testID='purpo' style={{ height: 30, width: 30, backgroundColor: 'purple' }}/>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
