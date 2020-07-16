import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {  
    
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <div style={ styles.cartIcon }>
                    {<FontAwesomeIcon icon={faShoppingCart} />}
                </div>
    <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );

}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 25,
        fontSize: 40
    },
    nav: {
        height: 70,
        background: "violet",
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 10,
        top:0
    }
}
export default Navbar;