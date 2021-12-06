const Paddle = ({ id, position }: { id: string; position: string }) => {
  return <div id={id} className={`paddle ${position}`}/>;
};

export default Paddle;