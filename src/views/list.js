import React from 'react';
import ProductItem from './components/item';
var Mock = require('mockjs');

class PartnerList extends React.Component {
  constructor (props) {
    super(props)

    let data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'img|+1': 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t8284/363/1326459580/71585/6d3e8013/59b857f2N6ca75622.jpg!q50.jpg',
        'title|+1': 'Apple iPhone 8 Plus',
        'price|+1': '5888',
        'type|+1': '',
        'recommod|+1': ''
      }]
    })
    this.state = {
      list: data
    }
    console.log('list',this.state.list)
    // 输出结果
  }
  render(){
    return (
      <ul>
        <ProductItem listdata={this.state.list['list']}/>
      </ul>
    )
  }
}
export default PartnerList