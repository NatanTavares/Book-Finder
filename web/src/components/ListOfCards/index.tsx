import React from 'react'
import Card from '../Card';

import './styles.css';

interface IProps {
  size?: number;
}

export default function ListOfCard({ size }: IProps) {
  return (
    <div className="ListOfCardComponent">
      <Card 
          imageUrl="http://books.google.com/books/content?id=LMS4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          title='Volume title'
          author='Author'
        />

        <Card 
          imageUrl="http://books.google.com/books/content?id=S6GeDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          title='Volume title'
          author='Author'
        />

        <Card 
          imageUrl="http://books.google.com/books/content?id=vWuCCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          title='Volume title'
          author='Author'
        />

        <Card 
          imageUrl="http://books.google.com/books/content?id=SsH-qdTx9pUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          title='Volume title'
          author='Author'
        />
    </div>
  );
}
