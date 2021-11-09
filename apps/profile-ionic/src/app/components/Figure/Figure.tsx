import { IonCol } from '@ionic/react';
import React from 'react';
import './Figure.css';

interface FigureProps {
  count: string | number;
  title: string;
}

const FigureContainer: React.FC<FigureProps> = (props) => {
  return (
    <IonCol size="4" className="figure">
      <h6>{props.count}</h6>
      <p>{props.title}</p>
    </IonCol>
  );
};

export default FigureContainer;
