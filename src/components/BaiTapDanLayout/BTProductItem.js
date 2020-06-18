import React, { Component } from 'react'

export default class BTProductItem extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center display-4">Danh sách sản phẩm</h3>
                  <div className="row">
            <div className="col-3">
                <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
                <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
                <BTProductItem></BTProductItem>
            </div>
            <div className="col-3">
                <BTProductItem></BTProductItem>
            </div>
            </div>
            </div>
          
        )
    }
}
