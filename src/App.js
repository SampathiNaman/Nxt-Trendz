import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = (productId, productQuantity = 1) => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(product => {
      if (product.id === productId) {
        return {...product, quantity: product.quantity + productQuantity}
      }
      return product
    })
    this.setState({cartList: updatedCartList})
  }

  decrementCartItemQuantity = (productId, productQuantity) => {
    if (productQuantity <= 1) {
      this.removeCartItem(productId)
      return
    }
    const {cartList} = this.state
    const updatedCartList = cartList.map(product => {
      if (product.id === productId) {
        return {...product, quantity: productQuantity - 1}
      }
      return product
    })
    this.setState({cartList: updatedCartList})
  }

  removeCartItem = productId => {
    const {cartList} = this.state
    const filteredCartList = cartList.filter(
      product => product.id !== productId,
    )
    this.setState({cartList: filteredCartList})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const cartProduct = cartList.find(
      productItem => productItem.id === product.id,
    )
    if (cartProduct) {
      this.incrementCartItemQuantity(product.id, product.quantity)
    } else {
      this.setState({cartList: [...cartList, product]})
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
