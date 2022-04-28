import React from 'react'
import DirectoryItem from '../DirectoryItem/DirectoryItem'
import {DirectoryContainer} from './directory.styles'

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category}  />
    ))}
  </DirectoryContainer>
  )
}

export default Directory