import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from "react-bootstrap";
import './SignIn.css';
import './SignInUtil.css';
import avatar from '../Images/avatar.png';
import userService from "../../Services/userService";
import Swal from 'sweetalert2';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        userService.login(this.state).then( (data) => {
            if(data.data.message === "successful Login"){
                window.location.replace('/dashboard');
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${data.data.message ? data.data.message : 'Access Denied!'}`,
                });
            }
        }, err => {
           console.error(err);
        });
    };

    render() {
        return (
            <Modal
                {...this.props}
                show={this.props.show}
                centered
            >
                <Modal.Body>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="modal-dialog modal-login">
                            <div className="avatar">
                                <img src={avatar} alt="Avatar" />
                            </div>
                        </div>
                        <i className="fas fa-times" onClick={this.props.hide}></i>
                    </Modal.Title>
                    <div className="app-content">
                        <form className="login100-form" onSubmit={this.handleSubmit}>
                            <div className="input-wrapper">
                                <div className="wrap-input100 m-b-26" data-validate="Username is required">
                                    <span className="label-input100">EMAIL</span>
                                    <input className="input100" type="email" name="email" placeholder="Enter Email" onChange={this.handleChange} />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 m-b-18" data-validate = "Password is required">
                                    <span className="label-input100">PASSWORD</span>
                                    <input className="input100" type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
                                    <span className="focus-input100"></span>
                                </div>
                            </div>
                            <div className="container-login100-form-btn m-b-18">
                                <button className="login100-form-btn"> Login </button>
                            </div>
                            <div className="footerNAMY">
                                Not a member yet? <Link to="/register" onClick={this.props.hide}><span className="signUpLink">SignUp</span></Link>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SignIn;
