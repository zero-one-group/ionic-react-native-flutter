import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import IconChat from '../../assets/icons/chat.svg';
import IconShare from '../../assets/icons/share.svg';
import IconFavorite from '../../assets/icons/favorite.svg';
import IconFavoriteBorder from '../../assets/icons/favorite_border.svg';

interface Post {
  date: string;
  avatar: string;
  text: string;
  comments: number;
  likes: number;
  liked?: boolean;
}

interface PostProps {
  post: Post;
}

const PostContainer: React.FC<PostProps> = (props) => {
  return (
    <View style={styles.post}>
      <View style={styles.postContent}>
        <View style={styles.postAvatar}>
          <Image style={styles.avatar} source={require('../assets/images/avatar.jpg')} />
        </View>
        <View style={styles.postDescription}>
          <View style={styles.postInfo}>
            <Text style={styles.postInfoText}>{props.post.date}</Text>
            <Text style={styles.postInfoText}>@93alan</Text>
          </View>
          <Text style={styles.postText}>{props.post.text}</Text>
          <View style={styles.postReactions}>
            <View style={styles.postReaction}>
              <IconChat width={18} height={18} fill="#8f9582" />
              <Text style={styles.postReactionValue}>{props.post.comments}</Text>
            </View>
            <View style={styles.postReaction}>
              {props.post.liked ? <IconFavorite width={18} height={18} fill="#8f9582" /> : <IconFavoriteBorder width={18} height={18} fill="#8f9582" />}
              <Text style={styles.postReactionValue}>{props.post.likes}</Text>
            </View>
            <View style={styles.postReaction}>
              <IconShare width={18} height={18} fill="#8f9582" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  post: {
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 1,
    paddingTop: 16,
    paddingBottom: 2,
    width: '100%',
    overflow: 'hidden',
  },
  postContent: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems:  'center',
  },
  postAvatar: {
    height: 56,
    width: 56,
    flex: 1 / 5,
    margin: 0,
    // borderBottomWidth: 3,
    // borderBottomColor: '#dadfd0',
    // // border: "3px solid #dadfd0"
  },
  avatar: {
    height: 56,
    width: 56,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'rgba(218, 223, 208, 0.4)',
  },
  postDescription: {
    flex: 4 / 5
  },
  postInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postInfoText: {
    color: '#bebebe',
  },
  postText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    maxHeight: 60,
    overflow: 'hidden',
  },
  postReactions: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postReaction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postReactionValue: {
    fontSize: 14,
    paddingLeft: 8,
  }
});

export default PostContainer;
