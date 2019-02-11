import React, { Component } from "react";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://api.icndb.com/jokes/random?firstName=Chuck&amp;lastName=Doe`)
      .then(res => {
        console.log(res);
        this.setState({
          quote: res.data.value.joke
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <header>
        <h2>Workout Tracker</h2>
        <p className="joke">{this.state.quote}</p>
      </header>
    );
  }
}

export default Header;
