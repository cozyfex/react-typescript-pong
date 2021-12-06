import './pong.css';
import Score from '../../components/pong/Score';
import Ball from '../../components/pong/Ball';
import Paddle from '../../components/pong/Paddle';
import { useEffect, useState } from 'react';
import { initialPongState } from '../../store/reducers/pong';

const Pong = () => {
  const INITIAL_VELOCITY = 0.025;
  const VELOCITY_INCREASE = 0.00001;
  const SPEED = 0.02;
  const [pong, setPong] = useState(initialPongState);
  const [aniReq, setAniReq] = useState(0);

  let aniRequestId = 0;
  let lastTime: number = 0;
  let testCount: number = 0;

  useEffect(() => {
    if (window) {
      ballReset();
      window.requestAnimationFrame(run);
      document.addEventListener('mousemove', playerPaddleMove);
    }

    return () => {
      window.cancelAnimationFrame(aniRequestId);
      document.removeEventListener('mousemove', playerPaddleMove);
      ballReset();
    };
  }, []);

  const run = (time: number) => {
    if (lastTime !== 0) {
      const delta = time - lastTime;
      update(delta);
    }

    lastTime = time;
    aniRequestId = window.requestAnimationFrame(run);

    // if (testCount < 200) window.requestAnimationFrame(run);
    // testCount++;
  };

  const playerPaddleMove = (e: any) => {
    const paddle = document.getElementById('player-paddle') as HTMLDivElement;
    setPaddlePosition(paddle, e.y / window.innerHeight * 100);
  };

  const setPaddlePosition = (paddle: HTMLDivElement, value: number) => {
    paddle.style.setProperty('--position', value.toString());
  };

  const update = (delta: number) => {
    const ball = document.getElementById('ball') as HTMLDivElement;
    const playerPaddle = document.getElementById('player-paddle') as HTMLDivElement;
    const computerPaddle = document.getElementById('computer-paddle') as HTMLDivElement;
    const paddleRects = [playerPaddle.getBoundingClientRect(), computerPaddle.getBoundingClientRect()];

    let ballY = 0;
    setPong(prevState => {
      ballY = prevState.ball.y;
      return prevState;
    });

    const computerPosition = parseInt(getComputedStyle(computerPaddle).getPropertyValue('--position'));
    const computerTargetPosition = computerPosition + SPEED * delta * (ballY - computerPosition);
    setPaddlePosition(computerPaddle, computerTargetPosition);

    setPong((prevState) => ({
      ...prevState, ball: {
        ...prevState.ball,
        x: prevState.ball.x + prevState.ball.direction.x * prevState.ball.velocity * delta,
        y: prevState.ball.y + prevState.ball.direction.y * prevState.ball.velocity * delta,
        velocity: prevState.ball.velocity += VELOCITY_INCREASE * delta,
      },
    }));

    const rect = ball.getBoundingClientRect();
    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      setPong(prevState => ({
        ...prevState,
        ball: {
          ...prevState.ball,
          direction: { ...prevState.ball.direction, y: prevState.ball.direction.y * -1 },
        },
      }));
    }
    if (paddleRects.some(r => isCollision(r, rect))) {
      setPong(prevState => ({
        ...prevState,
        ball: {
          ...prevState.ball,
          direction: { ...prevState.ball.direction, x: prevState.ball.direction.x * -1 },
        },
      }));
    }

    if (rect.right >= window.innerWidth || rect.left <= 0) handleLose();
  };

  const ballReset = () => {
    let heading = 0, x = 0, y = 0;
    while (
      Math.abs(x) <= 0.2
      || Math.abs(x) >= 0.9
      ) {
      heading = randomNumberBetween(0, 2 * Math.PI);
      x = Math.cos(heading);
      y = Math.sin(heading);
    }
    setPong((prevState) => ({
      ...prevState,
      ball: {
        x: 50,
        y: 50,
        velocity: INITIAL_VELOCITY,
        direction: { x, y },
      },
    }));
  };

  const handleLose = () => {
    const playerScore = document.getElementById('player-score') as HTMLDivElement;
    const computerPaddle = document.getElementById('computer-score') as HTMLDivElement;
    const ball = document.getElementById('ball') as HTMLDivElement;
    const rect = ball.getBoundingClientRect();
    if (rect.right >= window.innerWidth) {
      playerScore.textContent = String(parseInt(String(playerScore.textContent)) + 1);
    } else {
      computerPaddle.textContent = String(parseInt(String(computerPaddle.textContent)) + 1);
    }
    ballReset();
  };

  const randomNumberBetween = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const isCollision = (rect1: DOMRect, rect2: DOMRect) => {
    return (
      rect1.left <= rect2.right &&
      rect1.right >= rect2.left &&
      rect1.top <= rect2.bottom &&
      rect1.bottom >= rect2.top
    );
  };

  return (
    <div className="pong-layout">
      <Score score={pong.score}/>
      <Ball ball={pong.ball}/>
      <Paddle id="player-paddle" position="left"/>
      <Paddle id="computer-paddle" position="right"/>
    </div>
  );
};

export default Pong;