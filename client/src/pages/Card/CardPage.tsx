/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import type { AxiosResponse } from 'axios';
import type { Question } from '../Theme/type/type';
import './CardPage.css';
import ModalWindow from '../../shared/ui/Modal/ModalWindow';
import { RootState, useAppDispatch } from '../../App/store/store';
import { request } from '../../services/axiosInstance';
import { useSelector } from 'react-redux';

type CardPageProps = {
  question: Question;
};

function CardPage({ question }: CardPageProps): JSX.Element {
  const [userAnswer, setUserAnswer] = useState('');
  const [userAlert, setUserAlert] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onHandleClick = (): void => {
    setShowModal((prev) => !prev);
    setUserAlert('');
  };
  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === question.answer) {
      setUserAlert('Ответ верный!');
    } else {
      setUserAlert(`Ответ не верный! Правильный ответ: ${question.answer}`);
    }
    question.isAnswered = true;
    const response: AxiosResponse<{ message: 'success'; question: Question }> = await request.put(
      `/themes/${question.id}`,
    );
  };

  return (
    <>
      <div className="CardPage" onClick={onHandleClick}>
        <img src={`/src/pages/Card/assets/${question.score}rub.jpeg`} alt="score" />
      </div>
      {!question.isAnswered && (
        <ModalWindow active={showModal} setActive={setShowModal}>
          <img src={question.image} alt="questiond" />
          <h3>{question.question}</h3>
          <form onSubmit={onHandleSubmit}>
            <input
              type="text"
              placeholder="Твой ответ"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            {userAlert}
            <button type="submit">Ответить</button>
          </form>
          <button type="button" onClick={() => setShowModal((prev) => !prev)}>
            Назад
          </button>
        </ModalWindow>
      )}
    </>
  );
}

export default CardPage;
