import Link from 'next/link'
import { connect } from 'react-redux'

export default connect(state => state)(({ title, linkTo }) => {
  return (
    <div>
      <h1>{title}</h1>
      <nav>
        <Link href={linkTo}><a>点我跳转到ssr</a></Link>
        <br />
        <Link href='/noSSR'><a>点我跳转到nossr</a></Link>
      </nav>
    </div>
  )
})
