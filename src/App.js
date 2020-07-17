import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [ ],
        loading: true
    }
   
    this.db =  firebase.firestore();
    
  }
  componentDidMount () {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id;

    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    this
      .db
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;

          return data;
        })

        this.setState({
          products,
          loading: false
        })
      })
  }
  handleIncreaseQuantity = (product) =>{
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty+1
      })
      .then(() => {
        console.log('Document updated succesfully');
      })
      .catch((err) => {
        console.log('Error ', err);
      })
  }
  handleDecreaseQuantity = (product) =>{
    const { products } = this.state;
    const index = products.indexOf(product);

    // if (products[index].qty > 0)
    //     products[index].qty -= 1;
    // else
    //     return;

    // this.setState({
    //     products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    if (products[index].qty > 0){
      docRef
        .update({
          qty: products[index].qty-1
        })
        .then(() => {
          console.log('Document updated succesfully');
        })
        .catch((err) => {
          console.log('Error ', err);
        })
    }
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
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 700,
        qty: 3,
        title: 'washing machine'
      })
      .then((docRef) => {
        console.log('prod has been added',docRef)
      })
      .catch((err) => {
        console.log('Error', err);
      })
  }
  render(){
    const { products, loading } = this.state;
  return (
    <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button style={{padding:10, margin: 10}} onClick={this.addProduct}>Add product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading ... </h1>}
        <div style={{ fontSize: 30, padding: 10}}>Total: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
