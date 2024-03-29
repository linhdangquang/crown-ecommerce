import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from '../Directory/Directory';
import { BackgroundImg, Body, DirectoryContainer } from './directory.styles';

type DirectoryProps = {
  category: DirectoryCategory
}

const DirectoryItem: FC<DirectoryProps> = ({ category }) => {
  const { title, imageUrl, id, routeName } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`/${routeName}`);

  return (
    <DirectoryContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImg imageUrl={imageUrl}></BackgroundImg>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
