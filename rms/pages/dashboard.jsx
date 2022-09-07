import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { Grid } from '@chakra-ui/react'
import Statistics from 'components/dashboard/statistics'
import Payments from 'components/dashboard/payments'

const Dashboard = () => {
	const d = new Date(Date.now())
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<Grid templateColumns="repeat(12, 1fr)" gap={6}>
				<Statistics />
				<Payments />
			</Grid>
		</>
	)
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			props: {}
		}
	} else {
		return {
			redirect: {
				destination: '/'
			},

			props: {}
		}
	}
}

export default Dashboard
