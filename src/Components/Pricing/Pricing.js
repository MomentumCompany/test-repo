import React, {Component} from 'react';
import './Pricing.css'

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navSize: false,
            showModal: false
        }
    };

    handlePrice = (e) => {
        if(e.target.id == 1) {
            this.props.history.replace('/dashboard');
        }
        else if(e.target.id == 2){
            e.preventDefault();
        }
        else {
            e.preventDefault();
        }
    }

    render() {
        console.log(this.props);
        return (
          <div className="Pricing">
            <div className="PricingMid">
              <div className="PricingHeading">
                <h1>Pricing</h1>
              </div>
              <div className="price-list-container">
                <div className="price-list">
                  <h2>Trial</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus soluta, consequuntur, reiciendis debitis omnis fugiat libero pariatur amet omnis fugiat libero pariatur amet laudantium minima consectetur tenetur. Laudantium minima consectetur tenetur. Repudiandae, autem, voluptate modi deleniti sequi voluptatum!</p>
                  <div className="container-login100-form-btn">
                      <button className="login100-form-btn" id="1" onClick={this.handlePrice}> Select </button>
                  </div>
                </div>
                <div className="price-list">
                  <h2>Basic</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus soluta, consequuntur, reiciendis debitis omnis fugiat libero pariatur amet omnis fugiat libero pariatur amet laudantium minima consectetur tenetur. Laudantium minima consectetur tenetur. Repudiandae, autem, voluptate modi deleniti sequi voluptatum!</p>
                  <div className="container-login100-form-btn">
                      <button className="login100-form-btn" id="2" onClick={this.handlePrice}> Select </button>
                  </div>
                </div>
                <div className="price-list">
                  <h2>Advance</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptatibus soluta, consequuntur, reiciendis debitis omnis fugiat libero pariatur amet omnis fugiat libero pariatur amet laudantium minima consectetur tenetur. Laudantium minima consectetur tenetur. Repudiandae, autem, voluptate modi deleniti sequi voluptatum!</p>
                  <div className="select-btn-container">
                      <button className="select-btn" id="3" onClick={this.handlePrice}> Select </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Pricing
