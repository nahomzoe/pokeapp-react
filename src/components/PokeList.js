import PokeCard from "./PokeCard";

import React, { Component } from "react";

class PokeList extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });
        Promise.all(fetches).then((res) => {
          console.log(res);
          this.setState({ data: res, isLoading: false });
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {this.state.data.map((p) => (
          <PokeCard
            name={p.id}
            key={p.name}
            img={p.sprites.other.dream_world.front_default}
          />
        ))}
      </div>
    );
  }
}

export default PokeList;
