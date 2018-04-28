import React from 'react'
import withRedux from '../lib/withRedux'
import Page from '../components/Page'

class Other extends React.Component {
  render () {
    return (
      <div>
        <Page title='Other Page' linkTo='/' />
        <p className='test'> less </p>
      </div>
    )
  }
}

export default withRedux(Other)
