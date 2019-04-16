import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
         fouls: 0,
        hit: 0
    }
    
    render() {
    return ( 
        <div>
            <button onClick={this.strike}>Strike</button>
            <button onClick={this.ball}>Ball</button>
            <button onClick={this.foul}>Foul</button>
            <button onClick={this.hit}>Hit</button>
       
        <Display strikes={this.state.strikes} balls={this.state.balls} fouls={this.state.fouls} hit={this.state.hit} />
        </div>
     );
}

strike = () => {
    if(this.state.strikes === 2) {
this.setState({
strikes: 0, balls: 0
})
    } else {
        console.log('strikes', this.state.strikes)
        this.setState({
            strikes: this.state.strikes +1
        })
    }
}

ball = () => {
    if(this.state.balls === 4) {
        this.setState({
            strike: 0, balls: 0
        })
    } else {
        console.log('balls', this.state.balls)
        this.setState({
            balls: this.state.balls + 1
        })
    }
}

foul = () => {
      if(this.state.strikes === 0 ) {
        console.log('strikes', this.state.strikes)
        this.setState({
          balls: this.state.balls, strikes: this.state.strikes + 1 
        })
    } else if( this.state.strikes === 1) {
        console.log('strikes', this.state.strikes)
        this.setState({
            strikes: this.state.strikes + 1,  balls: this.state.balls
        })
    }else {
        this.setState({
            strikes: this.state.strikes, balls: this.state.balls
        })
    } 
}

hit = () => {
    this.setState({
        balls: 0, strikes: 0, hit: this.state.hit + 1
    })
}


}


 
export default Dashboard;