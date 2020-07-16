import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

const CartItem = (props) => {
    
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;

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
                    <div className="action-icons" onClick={() => onIncreaseQuantity(product)}>{<FontAwesomeIcon icon={faPlus} />}</div>
                    <div className="action-icons" onClick={() => onDecreaseQuantity(product)}>{<FontAwesomeIcon icon={faMinus} />}</div>
                    <div className="action-icons" onClick={() => onDeleteProduct(product.id)}>{<FontAwesomeIcon icon={faTrash} />}</div>
                
                </div>
            </div>
        </div>
    );

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