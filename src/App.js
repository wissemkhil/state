import React, { Component } from "react";
import pic from "./pic.jpg";
import "./App.css";
export class App extends Component {
  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);
  };
  state = {
    timer: 0,
    person: {
      fullName: "khilwissem",
      bio: "fullstack-devlopper and bussiness computing",
      imgSrc: pic,
      profession: "Etudiant",
    },

    show: true,
  };
  visible = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <card>
        <card className="cardmain">
          <div>
            <button onClick={this.visible}>Affiche</button>
            {this.state.show && (
              <div>
                <h6>{this.state.person.fullName}</h6>
                <h6>{this.state.person.bio}</h6>
                <img className="pic" src={this.state.person.imgSrc} />
                <h6>{this.state.person.profession}</h6>
                <h6>{this.state.timer}</h6>
              </div>
            )}
          </div>
        </card>
      </card>
    );
  }
}

export default App;
