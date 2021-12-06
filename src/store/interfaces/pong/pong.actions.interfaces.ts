import { BallInterface, DirectionInterface, ScoreInterface } from './pong.interfaces';

export enum PongActionTypes {
  SET_BALL = 'SET_BALL',
  SET_BALL_X = 'SET_BALL_X',
  SET_BALL_Y = 'SET_BALL_Y',
  SET_BALL_VELOCITY = 'SET_BALL_VELOCITY',
  SET_BALL_DIRECTION = 'SET_BALL_DIRECTION',
  SET_SCORE = 'SET_SCORE',
  SET_SCORE_PLAYER = 'SET_SCORE_PLAYER',
  SET_SCORE_COMPUTER = 'SET_SCORE_COMPUTER',
}

export interface SetBall {
  type: PongActionTypes.SET_BALL,
  data: BallInterface
}

export interface SetBallX {
  type: PongActionTypes.SET_BALL_X,
  data: number
}

export interface SetBallY {
  type: PongActionTypes.SET_BALL_Y,
  data: number
}

export interface SetBallVelocity {
  type: PongActionTypes.SET_BALL_VELOCITY,
  data: number
}

export interface SetBallDirection {
  type: PongActionTypes.SET_BALL_DIRECTION,
  data: DirectionInterface
}

export interface SetScore {
  type: PongActionTypes.SET_SCORE,
  data: ScoreInterface
}

export interface SetScorePlayer {
  type: PongActionTypes.SET_SCORE_PLAYER,
  data: number
}

export interface SetScoreComputer {
  type: PongActionTypes.SET_SCORE_COMPUTER,
  data: number
}