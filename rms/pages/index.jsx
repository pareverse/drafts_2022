import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Hero from 'components/sections/hero'

const Home = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

			<Hero />
			<div style={{ height: '200vh' }}></div>
		</>
	)
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			redirect: {
				destination: '/dashboard'
			},

			props: {}
		}
	} else {
		return {
			props: {}
		}
	}
}

export default Home
