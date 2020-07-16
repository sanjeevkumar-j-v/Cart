import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        
    }
    increaseQuantity = () => {
        // console.log("this.state", this.state);
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () => {
        
        this.setState((prevState) => {
            if(prevState.qty > 0){
                return {
                    qty: prevState.qty - 1
                }
            }
        });
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />

                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color: 'red'}}>Rs. {price}</div>
                    <div style={{ color: 'red'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        {/* <img alt="increase" className="action-icons" src="" />
                        <img alt="decrease" className="action-icons" src="" />
                        <img alt="delete" className="action-icons" src="" /> */}
                        <div className="action-icons" onClick={this.increaseQuantity.bind(this)}>{<FontAwesomeIcon icon={faPlus} />}</div>
                        <div className="action-icons" onClick={this.decreaseQuantity}>{<FontAwesomeIcon icon={faMinus} />}</div>
                        <div className="action-icons">{<FontAwesomeIcon icon={faTrash} />}</div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}
export default CartItem;