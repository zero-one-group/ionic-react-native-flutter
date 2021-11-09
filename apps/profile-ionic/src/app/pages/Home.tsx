import React from 'react';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRow,
  IonToolbar,
} from '@ionic/react';
import { arrowBackOutline, cameraOutline, filterOutline, menuOutline } from "ionicons/icons";
import { Figure } from '../components/Figure';

import './Home.css';
import { Post } from '../components/Post';

const AVATAR_URL = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80';

const Home: React.FC = () => {
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
    <IonPage className="page">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons>
            <IonButton color="light" slot="start">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="light" slot="end">
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
        <IonGrid className="top">
          <IonRow>
            <IonCol size="12">
              <IonAvatar className="avatar">
                <img alt="avatar" src={AVATAR_URL} />
              </IonAvatar>
              <div className="avatarUpload">
                <IonIcon icon={cameraOutline} />
              </div>
            </IonCol>
          </IonRow>

          <IonRow className="profileHeader">
            <IonCol size="12" className="ion-text-center">
              <IonCardTitle>Alan Montgomery</IonCardTitle>
              <IonCardSubtitle>Mobile Team Lead</IonCardSubtitle>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="figures ion-no-padding ion-no-margin">
          <IonRow>
            <Figure count="1,386" title="Posts" />
            <Figure count="849" title="Followers" />
            <Figure count="473" title="Following" />
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding">

          <IonRow>
            <IonCol size="12">
              <div className="postActions">
                <p>Posts by @93alan</p>
                <IonIcon icon={filterOutline} />
              </div>
            </IonCol>
          </IonRow>

          <IonList>
            {posts.map((post, index) => {
              return (
                <Post key={`post_${index}`} post={post} />
              );
            })}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
