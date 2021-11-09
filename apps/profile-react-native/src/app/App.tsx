import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Figure from './components/Figure';
import Post from './components/Post';

import IconArrowBack from '../assets/icons/arrow_back.svg';
import IconFilterList from '../assets/icons/filter_list.svg';
import IconMenu from '../assets/icons/menu.svg';
import IconPhotoCamera from '../assets/icons/photo_camera.svg';

const AVATAR_URL = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80';

const App = () => {
  const posts = [
    {
      date: "Mar 30",
      avatar: AVATAR_URL,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      comments: 13,
      likes: 49,
      liked: true
    },
    {
      date: "Mar 28",
      avatar: AVATAR_URL,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      comments: 1,
      likes: 9
    },
    {
      date: "Mar 25",
      avatar: AVATAR_URL,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      comments: 119,
      likes: 483
    },
    {
      date: "Mar 23",
      avatar: AVATAR_URL,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      comments: 27,
      likes: 78
    }
  ];
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.header}>
            <View style={styles.tabbar}>
              <TouchableOpacity
                style={styles.tabbarAction}
                onPress={() => null}
              >
                <IconArrowBack width={22} height={22} fill={Colors.lighter} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tabbarAction}
                onPress={() => null}
              >
                <IconMenu width={22} height={22} fill={Colors.lighter} />
              </TouchableOpacity>
            </View>
            <View style={styles.user}>
              <Image style={styles.avatar} source={require('../assets/images/avatar.jpg')} />
              <View style={styles.headerAction}>
                <TouchableOpacity
                  onPress={() => null}
                >
                  <IconPhotoCamera width={24} height={24} fill={Colors.dark} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.headerInfo}>
              <Text style={styles.heading} testID="heading">
                Alan Montgomery
              </Text>
              <Text style={styles.subtitle} testID="subtitle">
                Mobile Lead Team
              </Text>
            </View>
          </View>
          <View style={styles.statistics}>
            <Figure title="Posts" count="1,386" background="#9da38d" />
            <Figure title="Followers" count="849" background="#969b8a" />
            <Figure title="Following" count="473" background="#878f78" />
          </View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderTitle}>
              Posts by @93alan
            </Text>
            <Text style={styles.sectionHeaderAction}>
              <IconFilterList width={18} height={18} fill="#8f9582" />
            </Text>
          </View>
          <View style={styles.list}>
            {posts.map((post, index) => {
              return (
                <Post key={`post_${index}`} post={post} />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    backgroundColor: 'rgb(143, 149, 130)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  tabbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#8f9582',
  },
  tabbarAction: {
    paddingHorizontal: 14,
    paddingVertical: 0,
  },
  user: {
    padding: 0,
    margin: 0,
  },
  avatar: {
    width: 112,
    height: 112,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'rgba(218, 223, 208, 0.4)',
  },
  headerAction: {
    position: 'absolute',
    marginTop: 70,
    marginStart: 72,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(218, 223, 208, 0.4)',
    fontSize: 16,
  },
  headerInfo: {
    position: 'relative',
    paddingTop: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.lighter,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.light,
  },
  statistics: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  statisticsValue: {
    textAlign: 'center',
    fontSize: 24,
    color: Colors.lighter,
    fontWeight: '300',
  },
  statisticsTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.lighter,
    fontWeight: '300',
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dadfd0',
    backgroundColor: 'rgba(218, 223, 208, 0.4)'
  },
  sectionHeaderTitle: {
    fontSize: 16,
    color: '#959595',
  },
  sectionHeaderAction: {},
});

export default App;
