import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em",
      width: "45%"
    };
    return (
      <div>
      {this.state.count < 5 ?
        <div>
          <Heading caps fit textColor="white">
            Thats real cool and all
          </Heading>
          <Heading textSize="2em" textColor="black">
            But what about clicking stuff?
          </Heading>
          <button style={styles} type="button" onClick={this.handleClick}>{this.state.count} clicks</button>
        </div> :
        <div>
          <Heading caps textSize="3em" textColor="white">Easy there pal!</Heading>
          <Heading caps textSize="3em" textColor="black">We get the idea</Heading>
        </div>
        }
      </div>
    );
  }
}
