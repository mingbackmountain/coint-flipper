import React from "react";
import Coin from "./Coin";
import { choice } from "./้helpers";

class CoinContainer extends React.Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(oldState => {
      return {
        currentCoin: newCoin,
        nFlips: oldState.nFlips + 1,
        nHeads: oldState.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: oldState.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's Flip A Coin!</h2>
        {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
