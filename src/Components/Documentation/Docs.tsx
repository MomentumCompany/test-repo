import React, { Component } from 'react';
import DocImg from '../Images/Test.png';
import './Docs.css';

class Docs extends Component {
    render() {
        return (
            <div className="Docs">

            {/* Wrapper 1 */}
                <div className="wrapper1">
                    <div className="Left">
                        <h1 className="first-head">Momentum</h1>
                        <hr className="head-hr"/>
                        <p>Consectetur ad duis aliqua enim. Consectetur do aliqua et qui proident nisi culpa ipsum id laborum qui reprehenderit.</p>
                    </div>
                    <div className="Right">
                        <div className="RightImg">
                            <img src={DocImg} alt="DocImg"/>
                        </div>
                    </div>
                </div>

            {/* Wrapper 2 */}
                    <div className="feature-heading">
                        <h1 className="first-head">Features</h1>
                        <hr className="head-hr"/>
                    </div>
                <div className="wrapper2">
                    <div className="card1 cards">
                        <i className="fas fa-feather-alt"></i>
                        <h3 className="second-head">Feature</h3>
                        <p>Ex nisi non non ad qui.</p>
                    </div>
                    <div className="card2 cards">
                        <i className="fas fa-feather-alt"></i>
                        <h3 className="second-head">Feature</h3>
                        <p>Ex nisi non non ad qui.</p>
                    </div>
                    <div className="card3 cards">
                        <i className="fas fa-feather-alt"></i>
                        <h3 className="second-head">Feature</h3>
                        <p>Ex nisi non non ad qui.</p>
                    </div>
                    <div className="card4 cards">
                        <i className="fas fa-feather-alt"></i>
                        <h3 className="second-head">Feature</h3>
                        <p>Ex nisi non non ad qui.</p>
                    </div>
                </div>

            {/* Wrapper 3 */}
                    <div className="price-heading">
                        <h1 className="first-head">Pricing</h1>
                        <hr className="head-hr"/>
                    </div>
                <div className="wrapper3">
                    <div className="cardsAgain1 cardsAgain">
                            <h3 className="text-center second-head">Starter</h3>
                        <div className="price">
                            <i className="fas fa-rupee-sign"></i>
                            <h3>25</h3>
                            <span>/month</span>
                        </div>
                        <div className="ul">
                            <li><i className="fas fa-check"></i> Dolore veniam minim cupidatat laboris incididunt do duis nostrud sunt est incididunt id sit culpa.</li>
                            <li><i className="fas fa-check"></i> Eu ullamco pariatur ipsum veniam ex sit qui fugiat officia.</li>
                            <li><i className="fas fa-check"></i> Magna occaecat id Lorem amet eiusmod adipisicing est non aliquip labore culpa nulla culpa culpa.</li>
                            <li><i className="fas fa-check"></i> Laborum laboris veniam mollit nisi consectetur ad.</li>
                        </div>
                    </div>
                    <div className="cardsAgain2 cardsAgain">
                        <h3 className="text-center second-head">Professional</h3>
                        <div className="price">
                            <i className="fas fa-rupee-sign"></i>
                            <h3>50</h3>
                            <span>/month</span>
                        </div>
                        <div className="ul">
                            <li><i className="fas fa-check"></i> Magna occaecat id Lorem amet eiusmod adipisicing est non aliquip labore culpa nulla culpa culpa.</li>
                            <li><i className="fas fa-check"></i> Dolore veniam minim cupidatat laboris incididunt do duis nostrud sunt est incididunt id sit culpa.</li>
                            <li><i className="fas fa-check"></i> Eu ullamco pariatur ipsum veniam ex sit qui fugiat officia.</li>
                            <li><i className="fas fa-check"></i> Laborum laboris veniam mollit nisi consectetur ad.</li>
                        </div>
                    </div>
                    <div className="cardsAgain3 cardsAgain">
                        <h3 className="text-center second-head">Business</h3>
                        <div className="price">
                            <i className="fas fa-rupee-sign"></i>
                            <h3>75</h3>
                            <span>/month</span>
                        </div>
                        <div className="ul">
                            <li><i className="fas fa-check"></i> Dolore veniam minim cupidatat laboris incididunt do duis nostrud sunt est incididunt id sit culpa.</li>
                            <li><i className="fas fa-check"></i> Magna occaecat id Lorem amet eiusmod adipisicing est non aliquip labore culpa nulla culpa culpa.</li>
                            <li><i className="fas fa-check"></i> Eu ullamco pariatur ipsum veniam ex sit qui fugiat officia.</li>
                            <li><i className="fas fa-check"></i> Laborum laboris veniam mollit nisi consectetur ad.</li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Docs
