import { Link } from 'react-router-dom';
import { ScoreInterface } from '../../store/interfaces/pong/pong.interfaces';

const Score = ({ score }: { score: ScoreInterface }) => {
  return (
    <div className="score">
      <div id="player-score">{score.player}</div>
      <Link to={'/'}>Index</Link>
      <div id="computer-score">{score.computer}</div>
    </div>
  );
};

export default Score;