import React from "react";
import './style.css';
import GridRow from '../GridRow';
import Footer from '../Footer';
import Header from '../Header';


class App extends React.Component 
{
  constructor()
  {
    super();

    this.state={
      playerTurn: 'X',
      boardstate: [
        ['','',''],
        ['','',''],
        ['','','']],
    };

    this.updateboardstate = this.updateboardstate.bind(this);
  }

  updateboardstate(i,j)
  {
    if(this.state.boardstate[i][j]==='')
           {
             const currentState= [...this.state.boardstate];
             currentState[i][j]=this.state.playerTurn;
             this.setState(
               {
                 boardstate: currentState,
                 playerTurn: this.state.playerTurn === 'X' ? 'O' : 'X',
               });   
           }

         
  }

  componentDidUpdate()
  {
    setInterval(()=>this.checkEndGame(),0);
  }

  resetGame() {
    this.setState({
      playerTurn: 'X',
      boardstate: [
        ['','',''],
        ['','',''],
        ['','','']]
      });
  }

  checkEndGame()
    {
        if(this.checkforRows() ||this.checkforColumns() || this.checkforDiagonals())
        {
            const winner =this.state.playerTurn === 'X' ? '2' : '1';
            alert('Congratulations! Player '+winner+' wins');
            this.resetGame();
        } else if(this.checkforDraw())
        {
            alert('Draw!');
            this.resetGame();
        }
    }

    checkforRows()
    {
        
        for(let i=0;i<3;i++)
        {
            let flag=true;
            for(let j=1;j<3;j++)
            {
                if(this.state.boardstate[i][j]==='' || this.state.boardstate[i][j]!==this.state.boardstate[i][j-1]  )
                {
                    flag=false;
                }
            }

            if(flag===true)
            {
            return flag;
            }
        }
    return false;
    }

    checkforColumns()
    {
        
        for(let j=0;j<3;j++)
        {
            let flag=true;
            for(let i=1;i<3;i++)
            {
                if(this.state.boardstate[i][j]!==this.state.boardstate[i-1][j] || this.state.boardstate[i][j]==='')
                {
                    flag=false;
                }
            }

            if(flag===true)
            {
            return flag;
            }
        }
    return false;
    }

    checkforDiagonals(){

        let flag=true;
        for(let i=1;i<3;i++)
        {
            if(this.state.boardstate[i][i]!==this.state.boardstate[i-1][i-1] || this.state.boardstate[i][i]==='')
            {
                flag=false;
            }

        }
        if(flag===true)
        {
            return flag;
        }

        flag=true;
        for(let i=0,j=2;i<2;i++,j--)
        {
            if(this.state.boardstate[i][j]!==this.state.boardstate[i+1][j-1] || this.state.boardstate[i][j]==='')
            {
                flag=false;
            }

        }

    return flag;
    }

    checkforDraw()
    {
        for(let i=0; i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
               if(this.state.boardstate[i][j]==='')
               {
                   return false;
               }
            }
        }
        return true;
    }

 
  render()
  {
    return (<div className="container">
        <Header/>
    <div id="board">
    {this.state.boardstate.map((boardRow, rowIndex)=>
      ( <GridRow 
        key={rowIndex} 
        row={boardRow} 
        rowId={rowIndex} 
        playerClickCb={this.updateboardstate}
        />
      ))}
    </div>
        <Footer turn={this.state.playerTurn}/>
    </div>);
  }
}


 export default App;
