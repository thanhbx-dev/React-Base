import React from 'react'
import banner from '../../../assets/images/banner/shop-sidebar.jpg'
import WidgetContentComponent from './WidgetContent.component'
import ProductTopComponent from './ProductTop.component'
import SliderBarTagComponent from './SliderBarTag.component'
function SidebarShopComponent() {
  return (
    <div className="col-xs-12 col-md-3 sidebar-shop">
      <div className="sidebar-product-categori">
        <div className="widget-title">
          <h3>PRODUCT CATEGORIES</h3>
        </div>
        <WidgetContentComponent />
        <ProductTopComponent />
        <div className="sidebar-single-banner">
          <a href="#">
            <img src={banner} alt="Banner" />
          </a>
        </div>
        <SliderBarTagComponent />
      </div>
    </div>
  )
}

export default SidebarShopComponent
