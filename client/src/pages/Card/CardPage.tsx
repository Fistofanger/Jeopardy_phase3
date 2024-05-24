import React from 'react';
import type { Question } from '../Theme/type/type';
import './CardPage.css';

type CardPageProps = {
  question: Question;
};

function CardPage({ question }: CardPageProps): JSX.Element {

  return (
    <div className="CardPage">
      <div className="Card">
        <img src={`/src/pages/Card/assets/${question.score}rub.jpeg`} alt="score" />
      </div>
    </div>
  );
}

export default CardPage;
