import React, { Component } from 'react'
import PageMeta from './PageMeta'
import Header from './Header'

class Page extends Component {
  render() {
    return (
      <div>
        <PageMeta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Page