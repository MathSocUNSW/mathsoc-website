import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function mia() {
  // Redirects user back to previous page after 5s
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 5000)
  }, [])
  
  return (
    <div>
      <Head>
        <title>MathSoc - Spaghetti</title>
        <meta name='keywords' content='mathsoc' />
      </Head>
      <h1>Page Not Found</h1>
      <h2>Insert random maths 404 joke (like the train thingy)</h2>
      <p>Redirecting you back..</p>
    </div>
  )
}
