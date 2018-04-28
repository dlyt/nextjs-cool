import React from 'react'
import withRedux from '../lib/withRedux'
import Page from '../components/Page'

import '../css/example.less'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Page title='首页'linkTo='/other' />
        <p className='example'> less </p>
      </div>
    )
  }
}

export default withRedux(Home)
