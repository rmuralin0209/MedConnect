import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import firebase from '../config/firebase';
import { connect } from 'react-redux';
import { order_request } from '../store/action';
import { my_foods } from '../store/action';
import { sendSurvey } from '../config/firebase';


import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OrderRequests extends Component {
    constructor() {
        super()
        this.state = {
            tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
            tab2: "col-12 col-lg-4 col-md-4 text-center",
            tab3: "col-12 col-lg-4 col-md-4 text-center",
            tab1Content: true,
            tab2Content: false,
            tab3Content: false,
            //Survey
            date: "",
            fever: "",
            chill: "",
            cough: "",
            diffBreathe: "",
            soreThroat: "",
            aches: "",
            diarrhea: "",
            fatigue: "",
            congestion: "",
            tasteLoss: "",
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleFever = this.handleFever.bind(this);
        this.handleChill = this.handleChill.bind(this);
        this.handleCough = this.handleCough.bind(this);
        this.handleDiffBreathe = this.handleDiffBreathe.bind(this);
        this.handleSoreThroat = this.handleSoreThroat.bind(this);
        this.handleAches = this.handleAches.bind(this);
        this.handleDiarrhea = this.handleDiarrhea.bind(this);
        this.handleFatigue = this.handleFatigue.bind(this);
        this.handleCongestion = this.handleCongestion.bind(this);
        this.handleTasteLoss = this.handleTasteLoss.bind(this);
    }
    handleDate(e) {
        const date = e;
        this.setState({
            date: date
        })
    }

    handleFever(e) {
        const fever = e;
        this.setState({
            fever: fever
        });
    }

    handleChill(e) {
        const chill = e;
        this.setState({
            chill: chill
        });
    }

    handleCough(e) {
        const cough = e;
        this.setState({
            cough: cough
        });
    }

    handleDiffBreathe(e) {
        const diffBreathe = e;
        this.setState({
            diffBreathe: diffBreathe
        });
    }

    handleSoreThroat(e) {
        const soreThroat = e;
        this.setState({
            soreThroat: soreThroat
        });
    }

    handleAches(e) {
        const aches = e;
        this.setState({
            aches: aches
        });
    }

    handleDiarrhea(e) {
        const diarrhea = e;
        this.setState({
            diarrhea: diarrhea
        });
    }

    handleFatigue(e) {
        const fatigue = e;
        this.setState({
            fatigue: fatigue
        });
    }

    handleCongestion(e) {
        const congestion = e;
        this.setState({
            congestion: congestion
        });
    }

    handleTasteLoss(e) {
        const tasteLoss = e;
        this.setState({
            tasteLoss: tasteLoss
        });
    }

    _renderSurveyRequest() {
        return (<form> 
            <label> Today's Date: </label>
            <input type = "date" onKeyUp={(e) => this.handleDate(e.target.value)}/>



            <p>Please select the following symptoms if you have expereinced them in the last couple of days.
                <br />
                <input type = "checkbox" name = "symptom" value = "fever" onKeyUp={(e) => this.handleFever(e.target.value)}/> Fever
                <br />
                <input type = "checkbox" name = "symptom" value = "chill" onKeyUp={(e) => this.handleChill(e.target.value)}/> Chill
                <br />
                <input type = "checkbox" name = "symptom" value = "cough" onKeyUp={(e) => this.handleCough(e.target.value)}/> Cough
                <br />
                <input type = "checkbox" name = "symptom" value = "diffBreathe" onKeyUp={(e) => this.handleDiffBreathe(e.target.value)}/> Difficulty Breathing
                <br />
                <input type = "checkbox" name = "symptom" value = "soreThroat" onKeyUp={(e) => this.handleSoreThroat(e.target.value)}/> Sore Throat
                <br />
                <input type = "checkbox" name = "symptom" value = "aches" onKeyUp={(e) => this.handleAches(e.target.value)}/> Muscle Aches
                <br />
                <input type = "checkbox" name = "symptom" value = "diarrhea" onKeyUp={(e) => this.handleDiarrhea(e.target.value)}/> Diarrhea
                <br />
                <input type = "checkbox" name = "symptom" value = "fatigue" onKeyUp={(e) => this.handleFatigue(e.target.value)}/> Severe Fatigue
                <br />
                <input type = "checkbox" name = "symptom" value = "congestion" onKeyUp={(e) => this.handleCongestion(e.target.value)}/> Nasal Congestion
                <br />
                <input type = "checkbox" name = "symptom" value = "tasteLoss" onKeyUp={(e) => this.handleTasteLoss(e.target.value)}/> Loss of Taste or Smell
                <br />
                <input type = "submit" value = "Submit" onClick={this.handleSubmitBtn}/>
            </p>
        </form>)


    }

    async componentDidMount() {
        this.props.order_request();
        this.props.my_foods();
        // const { user } = await this.props
        // console.log("Did Mount => ", user)
        // this.fetchOrderRequests()
        // if (userDetails.isRestaurant) {
        //     // this.props.history.push('/restaurants')
        //     console.log("Didmount userDetails.isRestaurant => ", userDetails.isRestaurant)
        // }
    }

    static getDerivedStateFromProps(props) {
        const { user, myFoods } = props
        return {
            userDetails: user,
            myFoods: myFoods,
        }
    }
    handleTabs(e) {
        if (e === "tab1") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: true,
                tab2Content: false,
                tab3Content: false,
            })
        } else if (e === "tab2") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: false,
                tab2Content: true,
                tab3Content: false,
            })
        } else if (e === "tab3") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab1Content: false,
                tab2Content: false,
                tab3Content: true,
            })
        }
    }


    handleSendToInProgressBtn(userUid, orderId) {
        const { userDetails } = this.state;
        const restaurantUid = userDetails.userUid
        firebase.firestore().collection('users').doc(restaurantUid).collection('orderRequest').doc(orderId).update({
            status: "IN PROGRESS",
        }).then(() => {
            // console.log("First Seccussfully send to IN PROGRESS")
            firebase.firestore().collection('users').doc(userUid).collection('myOrder').doc(orderId).update({
                status: "IN PROGRESS",
            }).then(()=>{
                // console.log("Second Seccussfully send to IN PROGRESS")
            })
        })
    }

    handleSendToDeliveredBtn(userUid, orderId) {
        const { userDetails } = this.state;
        const restaurantUid = userDetails.userUid
        firebase.firestore().collection('users').doc(restaurantUid).collection('orderRequest').doc(orderId).update({
            status: "DELIVERED",
        }).then(() => {
            console.log("First Seccussfully send to IN PROGRESS")
            firebase.firestore().collection('users').doc(userUid).collection('myOrder').doc(orderId).update({
                status: "DELIVERED",
            }).then(()=>{
                console.log("Second Seccussfully send to IN PROGRESS")
            })
        })
    }

    _renderPendingOrderRequest() {
        const { orderRequest } = this.props;
        // console.log(orderRequest)
        if (orderRequest) {
            return Object.keys(orderRequest).map((val) => {
                const userUid = orderRequest[val].userUid;
                const orderId = orderRequest[val].id;
                if (orderRequest[val].status === "PENDING") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={orderRequest[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{orderRequest[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-danger order-req-status">{orderRequest[val].status}</span>
                                </div>
                            </div>
                            {
                                Object.keys(orderRequest[val].itemsList).map((val2) => {
                                    // console.log(orderRequest[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={orderRequest[val].itemsList[val2].itemImageUrl} />
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{orderRequest[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1"><small>{orderRequest[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.{orderRequest[val].itemsList[val2].itemPrice}</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                    <button type="button" onClick={() => this.handleSendToInProgressBtn(userUid, orderId)} className="btn btn-warning btn-sm text-uppercase px-3"><b>Send To In Progress</b></button>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span style={{ fontSize: '1.1rem' }}>RS.{orderRequest[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    _renderCOVID() {
        return (
            <form>
                <p>List the last date you have received a COVID-19 test</p>
            </form>
        )
    }
    _renderInProgressOrderRequest() {
        /* const { orderRequest } = this.props;
        // console.log(orderRequest)
        if (orderRequest) {
            return Object.keys(orderRequest).map((val) => {
                const userUid = orderRequest[val].userUid;
                const orderId = orderRequest[val].id;
                // console.log(orderRequest[val].status === "PENDING")
                if (orderRequest[val].status === "IN PROGRESS") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={orderRequest[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{orderRequest[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-danger order-req-status">{orderRequest[val].status}</span>
                                </div>
                            </div>
                            {
                                Object.keys(orderRequest[val].itemsList).map((val2) => {
                                    // console.log(orderRequest[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={orderRequest[val].itemsList[val2].itemImageUrl} />
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{orderRequest[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1"><small>{orderRequest[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.{orderRequest[val].itemsList[val2].itemPrice}</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                    <button type="button" onClick={()=>{this.handleSendToDeliveredBtn(userUid, orderId)}} className="btn btn-warning btn-sm text-uppercase px-3"><b>Send To Delivered</b></button>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span style={{ fontSize: '1.1rem' }}>RS.{orderRequest[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    } */
    const { myFoods } = this.state;
        if (myFoods) {
            console.log(myFoods);
            return Object.keys(myFoods).map((val) => {
                return (
                    <div className="container pt-4 pb-2 border-bottom" key={val}>
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={myFoods[val].itemImageUrl} />
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                <h6 className="">{myFoods[val].itemTitle}</h6>
                                <p className="mb-1"><big>{myFoods[val].contactName}</big></p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                <span className="mx-3"><b>{myFoods[val].contactEmail}</b></span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    _renderDeliveredOrderRequest() {
        const { orderRequest } = this.props;
        // console.log(orderRequest)
        if (orderRequest) {
            return Object.keys(orderRequest).map((val) => {
                // console.log(orderRequest[val].status === "PENDING")
                if (orderRequest[val].status === "DELIVERED") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={orderRequest[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{orderRequest[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-success order-req-status">{orderRequest[val].status}</span>
                                </div>
                            </div>
                            {
                                Object.keys(orderRequest[val].itemsList).map((val2) => {
                                    // console.log(orderRequest[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={orderRequest[val].itemsList[val2].itemImageUrl} />
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{orderRequest[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1"><small>{orderRequest[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.{orderRequest[val].itemsList[val2].itemPrice}</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                    {/* <button type="button" className="btn btn-warning btn-sm text-uppercase px-3"><b>Send To In Progress</b></button> */}
                                    <h6 style={{ fontSize: '15px' }} className="text-success">This order is successfully delivered</h6>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span style={{ fontSize: '1.1rem' }}>RS.{orderRequest[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    render() {
        const { tab1, tab2, tab3, tab1Content, tab2Content, tab3Content, userDetails } = this.state;
        return (
            <div>
                <div className="container-fluid res-details-cont1">
                    <div className="">
                        {/* <Navbar history={this.props.history} /> */}
                        <Navbar2 history={this.props.history} />
                        <div className="container px-0 res-details-cont1-text mx-0">
                            <div className="container">
                                {
                                    userDetails ? <div className="row">
                                        <div className="col-lg-2 col-md-3 col-6 text-lg-center text-md-center pr-0 mb-2">
                                            <img className="p-2 bg-white rounded text-center" alt="Natural Healthy Food" style={{ width: "60%" }} src={userDetails.userProfileImageUrl} />
                                        </div>
                                        <div className="col-lg-10 col-md-9 col-12 pl-lg-0 pl-md-0">
                                            <h1 className="restaurant-title">{userDetails.userName}</h1>
                                            <p className="restaurant-text">{userDetails.typeOfFood && userDetails.typeOfFood.join(', ')}</p>
                                        </div>
                                    </div> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ background: "#EBEDF3" }} className="container-fluid py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1">
                                <div className="container">
                                    <div className="row">
                                        <div className={tab1} onClick={() => this.handleTabs("tab1")}>
                                        <p className="order-req-tab-text"><FontAwesomeIcon icon="spinner" className="mr-3" />Survey</p>
                                        </div>
                                        <div className={tab2} onClick={() => this.handleTabs("tab2")}>
                                            <p className="order-req-tab-text"><FontAwesomeIcon icon="truck" className="mr-3" />My Contact List</p>
                                        </div>
                                        <div className={tab3} onClick={() => this.handleTabs("tab3")}>
                                        <p className="order-req-tab-text"><FontAwesomeIcon icon="tasks" className="mr-3" />Official COVID-19 Test</p>
                                        </div>
                                    </div>
                                    {tab1Content &&
                                        < div className="row pending-order-section">
                                            <div className="col-12 bg-white p-4">
                                                { this._renderSurveyRequest()}
                                            </div>
                                        </div>
                                    }
                                    {tab2Content && <div className="row inProgress-order-section">
                                        <div className="col-12 bg-white p-4">
                                            {this._renderInProgressOrderRequest()}
                                        </div>
                                    </div>
                                    }
                                    {tab3Content && <div className="row delivered-order-section">
                                        <div className="col-12 bg-white p-4">
                                        {this._renderCOVID()}
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}


const mapStateToProps = state => {
    // console.log("mapStateToProps states =>> ", state);
    return {
        user: state.user,
        orderRequest: state.orderRequest,
        myFoods: state.myFoods,
        // todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        order_request: () => dispatch(order_request()),
        my_foods: () => dispatch(my_foods()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRequests);