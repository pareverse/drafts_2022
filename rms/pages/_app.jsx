import { useState, useEffect } from 'react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider, Fade } from '@chakra-ui/react'
import FontFace from 'components/font-face'
import theme from 'theme'
import AppShell from 'components/app-shell'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	const [queryClient] = useState(() => new QueryClient())
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<SessionProvider session={session}>
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<FontFace />

						<ChakraProvider theme={theme}>
							<Fade in={mounted}>
								{mounted && (
									<AppShell>
										<Component {...pageProps} />
									</AppShell>
								)}
							</Fade>
						</ChakraProvider>
					</Hydrate>

					{/* <ReactQueryDevtools initialIsOpen={false} /> */}
				</QueryClientProvider>
			</SessionProvider>
		</>
	)
}

export default App
