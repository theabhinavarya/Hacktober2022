import React, {useState} from 'react';
import Square from './Square';


const Boards = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isXNext, setXNext] = useState(false);

  const HandleSquare = (position) =>{
   if(board[position]){
     return;
   }
    setBoard(prev=>{
      return prev.map((square, pos)=>{
        if(pos==position){
          return isXNext ? 'X' : 'O';
        }
        
        return square;
      });
    });
      setXNext((prev)=>!prev);

  };
  
  const RenderSquare = (position) =>{
    return <Square value={board[position]} onClick={()=>HandleSquare(position)} />
    
  };
  return (
    <div className="board">
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div> 
      <div className="board-row">
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
      </div>
    </div>
  );
};

export default Boards;
