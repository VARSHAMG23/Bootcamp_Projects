
import React, { Component } from 'react'
import './appStyle.css';
import style from './appStyle_module.css';
//rcc
export default class appStyle extends Component {
  render() {
    return (
      <div>
        <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1>
      </div>
    )
  }
}
