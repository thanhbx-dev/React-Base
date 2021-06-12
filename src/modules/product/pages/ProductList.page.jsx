import React from 'react'
import { Link } from 'react-router-dom'
import SidebarShopComponent from '../components/SidebarShop.component'
import ShopContentComponent from '../components/ShopContent.component'

function ProductListPage(props) {
  return (
    <div>
      <div className="breadcrumbs-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="woocommerce-breadcrumb">
                <Link to="/">Home</Link>
                <span className="separator">/</span> Shop
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-page-wraper container">
        <div className="container">
          <div className="row">
            <SidebarShopComponent />
            <ShopContentComponent {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListPage
