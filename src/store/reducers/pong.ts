import { PongStateInterface } from '../interfaces/pong/pong.interfaces';
import { PongActionTypes } from '../interfaces/pong/pong.actions.interfaces';

export const initialPongState: PongStateInterface = {
  ball: {
    x: 50,
    y: 50,
    velocity: 0,
    direction: { x: 0, y: 0 },
  },
  score: {
    player: 0,
    computer: 0,
  },
};

const PongReducer = (state: PongStateInterface = initialPongState, action: any): PongStateInterface => {
  let result = state;

  switch (action.type) {
    case PongActionTypes.SET_BALL:
      result = { ...state, ball: action.data };
      break;
    case PongActionTypes.SET_BALL_X:
      result = { ...state, ball: { ...state.ball, x: action.data } };
      break;
    case PongActionTypes.SET_BALL_Y:
      result = { ...state, ball: { ...state.ball, y: action.data } };
      break;
    case PongActionTypes.SET_BALL_VELOCITY:
      result = { ...state, ball: { ...state.ball, velocity: action.data } };
      break;
    case PongActionTypes.SET_BALL_DIRECTION:
      result = { ...state, ball: { ...state.ball, direction: action.data } };
      break;
    case PongActionTypes.SET_SCORE:
      result = { ...state, score: action.data };
      break;
    case PongActionTypes.SET_SCORE_PLAYER:
      result = { ...state, score: { ...state.score, player: action.data } };
      break;
    case PongActionTypes.SET_SCORE_COMPUTER:
      result = { ...state, score: { ...state.score, computer: action.data } };
      break;
  }

  return result;
};

export default PongReducer;