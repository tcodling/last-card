import React from "react";

import Play from "./Play";
import Deck from "./Deck";
import Hand from "./Hand";
import Style from "./Style";
import OppHand from "./OppHand";

import cards from "../cards.json";

class App extends React.Component {
  state = {
    deck: cards,
    hand: [],
    oppHand: [],
    play: [],
    buttonText: "",
    start: false,
    style: "classic",
  };

  componentDidMount = () => {
    this.shuffle();
  };

  swapStyle = () => {
    if (event.target.innerHTML === "Pixel") {
      document.getElementById("style").setAttribute("href", "/pixel.css");
    } else if (event.target.innerHTML === "Classic") {
      document.getElementById("style").setAttribute("href", "/main.css");
    }
  };

  shuffle = () => {
    this.setState({
      deck: this.state.deck.sort(() => Math.random() - 0.5),
    });
  };

  changeButton = (i) => {
    if (i === "error") {
      this.setState({
        buttonText: "You can not place that card",
      });
    } else if (i === "success") {
      this.setState({
        buttonText: "Good Job!",
      });
    } else if (i === "start") {
      this.setState({
        buttonText: "Lets go!",
      });
    } else if (i === "draw") {
      this.setState({
        buttonText: "Oh no",
      });
    } else if (i === "win") {
      this.setState({
        buttonText: "You win! Start over?",
      });
    }
  };

  draw = () => {
    let currentHand = this.state.hand;
    currentHand.push(this.state.deck[0]);
    this.setState({
      hand: currentHand,
      deck: this.state.deck.slice(1),
    });
    this.changeButton("draw");
    this.oppPlay();
  };

  oppDraw = () => {
    setTimeout(() => {
      let currentOppHand = this.state.oppHand;
      currentOppHand.push(this.state.deck[0]);
      this.setState({
        oppHand: currentOppHand,
        deck: this.state.deck.slice(1),
      });
    }, 1000);
  };

  oppPlay = () => {
    let currentPlay = this.state.play;
    for (let i in this.state.oppHand) {
      let card = this.state.oppHand[i];
      console.log(card);
      if (
        card.suit === currentPlay[0].suit ||
        card.value === currentPlay[0].value
      ) {
        setTimeout(() => {
          currentPlay.unshift(card);
          let newOppHand = this.state.oppHand;
          newOppHand.splice(newOppHand.indexOf(card), 1);
          this.setState({
            play: currentPlay,
            oppHand: newOppHand,
          });
        }, 1000);
        return;
      }
    }
    this.oppDraw();
  };

  play = (event) => {
    let currentPlay = this.state.play;
    let card = this.state.hand[event.target.id];
    if (
      currentPlay[0] === undefined ||
      card.suit === currentPlay[0].suit ||
      card.value === currentPlay[0].value
    ) {
      currentPlay.unshift(card);
      let newHand = this.state.hand;
      newHand.splice(newHand.indexOf(card), 1);
      this.setState({
        play: currentPlay,
        hand: newHand,
      });
      this.changeButton("success");
      if (this.state.hand.length === 0) {
        this.changeButton("win");
      }

      this.oppPlay();
    } else {
      this.changeButton("error");
    }
  };

  startGame = () => {
    let hand = this.state.deck.slice(0, 7);
    let oppHand = this.state.deck.slice(7, 14);
    this.setState({
      hand: hand,
      oppHand: oppHand,
      deck: this.state.deck.slice(14),
      start: true,
    });
    this.changeButton("start");
  };

  render() {
    return (
      <>
        <h1 className="bounce-in-left" id="heading">
          L<span className="red">a</span>s<span className="red">t</span> C
          <span className="red">a</span>r<span className="red">d</span>
        </h1>
        <Style changeStyle={this.swapStyle} />
        <div id="wood">
          <OppHand oppHand={this.state.oppHand} />
          {this.state.start && (this.state.hand.length === 0 || this.state.oppHand.length === 0) ? 
            this.state.hand.length === 0 ? <h1 className='win'>You Win!</h1> : <h1 className='lose'>You Lose!</h1>
          : (
            <div id="board">
              <Play played={this.state.play[0]} />
              <Deck cards={this.state.deck} />
            </div>
          )}
          <Hand playCard={this.play} hand={this.state.hand} />
        </div>
        {!this.state.start ? (
          <button onClick={this.startGame}>Start Game</button>
        ) : (
          <button onClick={this.draw}>Draw</button>
        )}
      </>
    );
  }
}

export default App;
