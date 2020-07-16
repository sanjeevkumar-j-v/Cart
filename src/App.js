import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: 'Watch',
                qty: 1,
                img: 'https://imagex.kartrocket.com/image_thewatchshop/data/Flip-9343-1.jpg?imgeng=/w_1000/h_1400',
                id:1
            },
            {
                price: 700,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://i.pcmag.com/imagery/reviews/04R1s9xuQfmVH4MHFeuaghc-18..v_1570065414.jpg',
                id:2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://cdn.mos.cms.futurecdn.net/wEvcfLuHBMb6yopwxHFwg-1200-80.jpg',
                id:3
            }
        ]
    }
    
  }
  handleIncreaseQuantity = (product) =>{
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products
    })
  }
  handleDecreaseQuantity = (product) =>{
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty > 0)
        products[index].qty -= 1;
    else
        return;

    this.setState({
        products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
  }

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let total = 0;

    products.forEach((product) => {
      total += product.qty * product.price;
    })

    return total;
  }
  render(){
    const { products } = this.state;
  return (
    <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontSize: 30, padding: 10}}>Total: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
