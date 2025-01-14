/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import './App.css'
import Square from './Components/Square'
import { Patterns } from './Patterns'

function App() {

  const [board, setBoard] = useState(["","","","","","","","",""])
  const [player , setPlayer] = useState("O")
  const [result,setResult] = useState({Winner:"none" , State: "none"})

  useEffect(()=>{
    checkWin();
    if_Tie();
    if(player ==  "X"){
      setPlayer("O")
    }else{
      setPlayer("X")
    }
  },[board])

  useEffect(()=>{
    if(result.State != "none"){
      alert(`Game Finished Winning Player: ${result.Winner}`)
      restart()
    }
  },[result])



  const chooseSquare= (square)=>{
    setBoard(board.map((val,index)=>{
      if(index == square && val == ""){
        return player
      }
      return val;
    }))

  }

  const checkWin = ()=>{
    Patterns.forEach((currPattern)=>{
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer =="") return;
      let foundPattern = true
      currPattern.forEach((idx)=>{
        if (board[idx] != firstPlayer){
          foundPattern = false
        }
      })

      if(foundPattern){
        setResult({Winner:player ,State:"Won"})

      }
    })
  }

  const if_Tie = ()=>{
    let filled = true;
    board.forEach((square)=>{
      if (square == ""){
        filled = false
      }
    })
    if(filled){
      setResult({Winner:"No One",State:"Tie"})
    }
  }

  const restart = ()=>{
    setBoard(["","","","","","","","",""])
    setPlayer("O")
  }

 

  return (
    <>
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSquare={()=>{chooseSquare(0)}}/>
          <Square val={board[1]} chooseSquare={()=>{chooseSquare(1)}}/>
          <Square val={board[2]} chooseSquare={()=>{chooseSquare(2)}}/>
          </div>
        <div className="row">
          <Square val={board[3]} chooseSquare={()=>{chooseSquare(3)}}/>
          <Square val={board[4]} chooseSquare={()=>{chooseSquare(4)}}/>
          <Square val={board[5]} chooseSquare={()=>{chooseSquare(5)}}/>

        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={()=>{chooseSquare(6)}}/>
          <Square val={board[7]} chooseSquare={()=>{chooseSquare(7)}}/>
          <Square val={board[8]} chooseSquare={()=>{chooseSquare(8)}}/>

        </div>
      
      </div>
    </div>
     
    </>
  )
}

export default App
