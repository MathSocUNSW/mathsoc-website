import Head from 'next/head';
import Hero from '../components/Hero';

export default function index() {
    return (
        <div>
            <Head>
                <title>MathSoc</title>
                <meta name='keywords' content='mathsoc' />
            </Head>
            <Hero />
            I am home
        </div>
    )
}
