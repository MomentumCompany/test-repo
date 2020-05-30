import React, {Component} from 'react';
import './SignUp.css'
import userService from "../../Services/userService";
import Swal from 'sweetalert2';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name : '',
            subscriptionPlanId : 1,
            email: '',
            organisation : '',
            pincode : '',
            countryCode : 91,
            country: '',
            mobileNo : '',
            designation : '',
            password: '',
            city : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        userService.register(this.state).then( () => {
            Swal.fire(
                'Success',
                'Registration Successful',
                'success'
            );
            this.props.history.replace('/pricing');
        }).catch(err => {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    };

    render() {
        return (
            <div className="SignUp">
              <div className="SignupMid">
                <div className="SignupHeading">
                  <h1>Sign Up</h1>
                </div>
                  <form className="signup-container" onSubmit={this.handleSubmit}>
                    <div className="signup-divide">
                        <div className="wrap-input100 m-b-26" data-validate="Name is required">
                            <span className="label-input">NAME</span>
                            <input className="input100" type="text" name="Name" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 m-b-26" data-validate="Email is required">
                            <span className="label-input">EMAIL</span>
                            <input className="input100" type="email" name="email" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 m-b-26" data-validate = "Password is required">
                            <span className="label-input">PASSWORD</span>
                            <input className="input100" type="password" name="password" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 m-b-26">
                            <span className="label-input">DESIGNATION</span>
                            <input className="input100" type="text" name="designation" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 m-b-26" data-validate="Mobile No is required">
                            <span className="label-input">MOBILE NO</span>
                            <input className="input100" type="number" name="mobileNo" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                    </div>
                    <div className="signup-divide">
                        <div className="wrap-input100 m-b-26">
                            <span className="label-input">COUNTRY</span>
                            <input className="input100" type="text" name="country" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 m-b-26">
                            <span className="label-input">CITY</span>
                            <input className="input100" type="text" name="city" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 m-b-26" data-validate="PinCode is required">
                            <span className="label-input">PINCODE</span>
                            <input className="input100" type="number" name="pincode" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 m-b-26">
                            <span className="label-input">ORGANIZATION</span>
                            <input className="input100" type="text" name="organisation" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>
                    </div>
                    <div className="signup-btn-container">
                        <button className="signup-btn"> SignUp </button>
                    </div>
                  </form>
                </div>
              </div>
        )
    }
}

export default SignUp
