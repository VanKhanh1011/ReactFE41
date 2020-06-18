import React, { Component } from "react";

export default class DataBiding extends Component {
    // khai bao o ngoai la thuoc tinh, sd = this,  khai bao k co let
    hocVien={
        ma:1,
        hoTen:'Nguyen Van A',
        hinhAnh:'http://picsum.photos/200/300'
    }
  // pt renderIMG do mình tao ra
  renderImg() {
    return <img src="http://picsum.photos/200/300"/>;
  }
  // pt render của react component
  render() {
    //   khai bao o trong ham la bien, f co let
    let title = "hello fe 41";
    return (
      <div>
          <div className="container">
<div className="card text-left">
    <img width={100} height={500} className='card-img-top' src={this.hocVien.hinhAnh}/>
    <div className='card-body'>
    <h4 className='card-title'>{this.hocVien.hoTen}</h4>
    </div>
     </div>
          </div>
        {/* biding biến */}
        <h1>{title}</h1>
        <input value={title}></input>
        {/* biding bang phuong thuc */}
        {this.renderImg()}
      </div>
    );
  }
}
