export interface PongStateInterface {
  score: ScoreInterface;
  ball: BallInterface;
}

export interface ScoreInterface {
  player: number;
  computer: number;
}

export interface BallInterface {
  x: number;
  y: number;
  velocity: number;
  direction: DirectionInterface;
}

export interface DirectionInterface {
  x: number;
  y: number;
}