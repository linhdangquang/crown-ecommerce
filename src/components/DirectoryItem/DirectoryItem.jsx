import React from 'react';
import { BackgroundImg, Body, DirectoryContainer } from './directory.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, id } = category;
  return (
    <DirectoryContainer key={id}>
      <BackgroundImg imageUrl={imageUrl}></BackgroundImg>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
