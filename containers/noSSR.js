import React from 'react'
import withRedux from '../lib/withRedux'
import PageCount from '../components/PageCount'
import { addCount } from '../lib/count/actions'
import Link from 'next/link'

class Counter extends React.Component {
  render () {
    return (     
      <div>
        <PageCount />
        <Link href='/'><a>回首页</a></Link>
      </div>
    )
  }
}

export default withRedux(Counter)
