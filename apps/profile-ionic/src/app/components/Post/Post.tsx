import { IonAvatar, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { chatbubbleOutline, heart, heartOutline, shareSocialOutline } from 'ionicons/icons';
import React from 'react';
import './Post.css';

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
    <div className="post">
      <IonItem lines="none">
        <IonAvatar className="postAvatar">
          <img alt="avatar" src={props.post.avatar} />
        </IonAvatar>
        <IonLabel className="ion-text-wrap">
          <div className="postInfo">
            <p>{props.post.date}</p>
            <p>@93alan</p>
          </div>
          <p className="postText">{props.post.text}</p>
          <div className="postReactions">
            <div className="postReaction">
              <IonIcon icon={chatbubbleOutline} />
              <p>{props.post.comments}</p>
            </div>
            <div className="postReaction">
              <IonIcon icon={props.post.liked ? heart : heartOutline} />
              <p>{props.post.likes}</p>
            </div>
            <div className="postReaction">
              <IonIcon icon={shareSocialOutline} />
            </div>
          </div>
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default PostContainer;
