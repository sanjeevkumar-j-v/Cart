import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import CartItem from './CartItem';

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

class Cart extends React.Component {
   
    render() {
        return (
            <div className="cart">
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        );
    }
}


export default Cart;