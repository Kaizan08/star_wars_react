import React, { Component } from 'react';

class Vehicle extends Component {
  render() {
      let cards = this.props.state.vehicles.map(card=>{
        return (
            <div key={card.name} className="card">
                <div className="">
                <h2 className="card-title">Vehicle: {card.name}</h2>
                <h3 className="card-subtitle mb-2 text-muted">Model: {card.model}</h3>
                    <div className="card card-outline-secondary mb-3 text-left">
                        <h4 className="card-text">Specs</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Manufacturer: {card.manufacturer}</li>
                            <li className="list-group-item">Class: {card.vehicle_class}</li>
                            <li className="list-group-item">Passengers: {card.passengers}</li>
                            <li className="list-group-item">Crew: {card.crew}</li>
                            <li className="list-group-item">Length: {card.length}</li>
                            <li className="list-group-item">Max Speed: {card.max_atmosphering_speed}</li>
                            <li className="list-group-item">Cargo Capacity: {card.cargo_capacity}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
      })
    return (
      <div className="card-columns">
          {cards}
      </div>
    );
  }
}
export default Vehicle;