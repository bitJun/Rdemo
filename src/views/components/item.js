import React from 'react';
import style from './item.scss'

class ProductItem extends React.Component {
  constructor (props) {
    super(props)
    let data = this.props.listdata
    console.log(this.props.listdata.list)
  }
  render() {
    return (
      <div>
          {
            this.props.listdata && this.props.listdata.map((item, index) => {
              return (
                <li className="clearfix logo" key={index}>
                  <img className="pull-left" src={item.img}/>
                </li>
              )
            })
          }
      </div>
    )
  }
}
export default ProductItem;