import { BallInterface } from '../../store/interfaces/pong/pong.interfaces';

const Ball = ({ ball }: { ball: BallInterface }) => {
  return <div id="ball" className="ball" style={{ left: `${ball.x}vw`, top: `${ball.y}vh` }}/>;
};

export default Ball;