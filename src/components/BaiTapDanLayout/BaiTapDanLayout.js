import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import ProductList from './ProductList'
import BTFooter from './BTFooter'
import BTProductItem from './BTProductItem'


export default class BaiTapDanLayout extends Component {
    render() {
        return (
            <div>
            <BTHeader></BTHeader>
            <BTSlider></BTSlider>
      
           <ProductList></ProductList>
           <BTFooter></BTFooter>
            </div>
        )
    }
}
