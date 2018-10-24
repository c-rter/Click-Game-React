import React, { Component } from "react";
import BuildingCard from "./components/BuildingCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import buildings from "./buildings.json";
import "./App.css";

var counterStatus = 0;

class App extends Component {
  state = {
    buildingKey:  buildings,
    counterKey: counterStatus
  };

  shuffleBuildings = id => {
    const buildings = this.state.buildingKey;
   const indexID = id;
   var index = buildings.findIndex(function(item, i){return item.id === indexID});

   if (buildings[index].status === 1) {
      counterStatus = 0;
      for (var i = 0; i < buildings.length; i++)
      {
        buildings[i].status = 0;
      }
   }
   else
   {
    buildings[index].status = 1;
    counterStatus++;
   };

function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
  }
  return sourceArray;
}

const shuffledBuildings = shuffle(buildings);
   this.setState({ buildingKey: shuffledBuildings });
   this.setState({ counterKey: counterStatus });
  };

  render() {
    return (
      <Wrapper>
        <Title>{this.state.counterKey}</Title>
        {this.state.buildingKey.map(building => (
          <BuildingCard
            shuffleBuildings={this.shuffleBuildings}
            id={building.id}
            key={building.id}
            image={building.image}
            status={building.status}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
