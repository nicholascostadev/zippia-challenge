import { type NextPage } from 'next'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/test/jobs')
  }, [router])
  return null
}

export default Home
