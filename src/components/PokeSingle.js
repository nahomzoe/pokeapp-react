import React, { Component } from "react";

class PokeSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: data, isLoading: false }));
  }
  render() {
    if (this.state.isLoading) {
      return <P>Loading...</P>;
    }
    return (
      <div>
        <h3>{this.state.pokesingle}</h3>single Pokemon will be here
        <img
          src={
            this.state.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt={this.state.data.name}
        />
      </div>
    );
  }
}

export default PokeSingle;
