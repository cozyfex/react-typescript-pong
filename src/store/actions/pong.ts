import {
  PongActionTypes,
  SetBall,
  SetBallDirection,
  SetBallVelocity,
  SetBallX,
  SetBallY,
  SetScore,
  SetScoreComputer,
  SetScorePlayer,
} from '../interfaces/pong/pong.actions.interfaces';
import { BallInterface, DirectionInterface, ScoreInterface } from '../interfaces/pong/pong.interfaces';

export const setBall = (data: BallInterface): SetBall => ({
  type: PongActionTypes.SET_BALL,
  data,
});

export const setBallX = (data: number): SetBallX => ({
  type: PongActionTypes.SET_BALL_X,
  data,
});

export const setBallY = (data: number): SetBallY => ({
  type: PongActionTypes.SET_BALL_Y,
  data,
});

export const setBallVelocity = (data: number): SetBallVelocity => ({
  type: PongActionTypes.SET_BALL_VELOCITY,
  data,
});

export const setBallDirection = (data: DirectionInterface): SetBallDirection => ({
  type: PongActionTypes.SET_BALL_DIRECTION,
  data,
});

export const setScore = (data: ScoreInterface): SetScore => ({
  type: PongActionTypes.SET_SCORE,
  data,
});

export const setScorePlayer = (data: number): SetScorePlayer => ({
  type: PongActionTypes.SET_SCORE_PLAYER,
  data,
});

export const setScoreComputer = (data: number): SetScoreComputer => ({
  type: PongActionTypes.SET_SCORE_COMPUTER,
  data,
});