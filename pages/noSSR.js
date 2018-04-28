import dynamic from 'next/dynamic'

const NoSSR = dynamic(import('../containers/noSSR'), { ssr: false })

export default NoSSR
