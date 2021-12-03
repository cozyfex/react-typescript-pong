import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sampleRequestAction } from '../store/actions/sample';
import { RootState } from '../store/reducers';
import { Link } from 'react-router-dom';

const SagaTest = () => {
  const dispatch = useDispatch();
  const { title, contents } = useSelector(
    (state: RootState) => state.SampleReducer,
  );

  const onClickHero = useCallback(
    (hero) => () => {
      dispatch(sampleRequestAction(hero));
    },
    [dispatch],
  );

  return (
    <div>
      <button onClick={onClickHero('superman')}>슈퍼맨</button>
      <button onClick={onClickHero('batman')}>배트맨</button>
      <Link to="/">Go to Index</Link>
      {title && <div>{title}</div>}
      <br/>
      {contents && (
        <div>
          {contents.map((show) => (
            <div key={show.id}>
              <a href={show.url}>{show.name}</a>
              <div>점수 : {show.score}</div>
              <div>타입 : {show.type}</div>
              <div>언어 : {show.language}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SagaTest;
