// Write your JS code here

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Products = () => {
  const accessToken = Cookies.get('jwt_token')
  const productImageUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png'

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img src={productImageUrl} alt="products" />
      </div>
    </>
  )
}

export default Products
