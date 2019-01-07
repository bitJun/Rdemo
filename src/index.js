import React from 'react';
import ReactDom from 'react-dom';
import PartnerList from './views/list'
import './sass/reset.scss'

class Index extends React.Component{
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <h2>Hello World</h2>
    )
  }
}
let html=document.getElementsByTagName("html")[0];
let a=html.offsetWidth/25;html.style.fontSize=a+"px";	
let app = document.createElement('div');
app.setAttribute('id','app');
document.body.appendChild(app);
let appDom = document.getElementById('app');
ReactDom.render(<PartnerList />, appDom)