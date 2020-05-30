import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import SignIn from "../SignIn/SignIn";
import $ from "jquery";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navSize: false,
            showModal: false
        }
    }

    componentDidMount() {
        $('.navTitle').css({'display': 'none'});
    }

    handleNavbar = () => {
      if(this.state.navSize === false){
          $('.Navbar').css({'width': '30vh'});
          $('.navTitle').css({'display': 'flex'});
          $('.navTitle h5').css({'animation' : 'fadeIn .4s ease-in forwards'});
          $('.fa-arrow-right').css({'transform' : 'rotateY(-180deg)'});
          this.setState({
              ...this.state,
              navSize: true
          });
      }
      else {
          $('.Navbar').css({'width': '10vh'});
          $('.navTitle').css({'display': 'none'});
          $('.navTitle h5').css({'animation' : 'fadeOut .4s ease-in forwards'});
          $('.fa-arrow-right').css({'transform' : 'rotateY(0deg)'});
          this.setState({
              ...this.state,
              navSize: false
          });
      }
    };

    handleModel = () => {
        $('.Navbar').css({'width': '10vh'});
        $('.navTitle').css({'display': 'none'});
        $('.navTitle h5').css({'animation' : 'fadeOut .4s ease-in forwards'});
        $('.fa-arrow-right').css({'transform' : 'rotateY(0deg)'});
        this.setState({
            ...this.state,
            showModal: true
        });
    };

    closeModel = () => {
        this.setState({
            ...this.state,
            showModal: false
        });
    };

    render() {
        return (
            <div className="Navbar">
                <SignIn show={this.state.showModal} hide={()=> this.closeModel()}/>
                <i className="fas fa-arrow-right" onClick={this.handleNavbar}></i>
                <div className="logoSpace">
                    <Link to="/"><i className="fas fa-plug"></i></Link>
                </div>
                <div className="linkSpace">
                    <i className="fas fa-file-alt"><span className="navTitle"><h5>Documents</h5></span></i>
                    <i className="fas fa-check-circle"><span className="navTitle"><h5>About Us</h5></span></i>
                    <i className="fas fa-phone"><span className="navTitle"><h5>Reach Us</h5></span></i>
                    <i className="fas fa-user" onClick={this.handleModel} data-keyboard="false" data-backdrop="static"><span className="navTitle"><h5>Sign In</h5></span></i>
                </div>
            </div>
        )
    }
}

export default Navbar
