import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../App/store/store';
import CardPage from '../Card/CardPage';
import './ThemePage.css';

function ThemePage(): JSX.Element {
  const themes = useSelector((store: RootState) => store.themes.themes);

  return (
    <div className="ThemePage">
      {themes.map((theme) => (
        <div key={theme.id} className="ThemeRow">
          <h3>{theme.name}</h3>
          <div className='QuestionsRow'>
            {theme.Questions.map((question) => (
              <CardPage key={question.id} question={question} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThemePage;
