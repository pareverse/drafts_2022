import { useState } from 'react'
import NextLink from 'next/link'
import { getSession, signIn } from 'next-auth/react'
import { Button, chakra, Container, Divider, Flex, Input, LightMode, Stack, Text, useToast } from '@chakra-ui/react'
import Romadan from 'components/logos/romadan'
import Google from 'components/logos/google'
import Facebook from 'components/logos/facebook'
import { ArrowLeft } from 'react-feather'

const Login = () => {
	const [email, setEmail] = useState('')
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const toast = useToast()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!email) {
			return setError(true), setErrorMessage('Email address is required.')
		} else {
			setError(false), setErrorMessage('')
		}

		// if (email.includes('@gmail.com')) {
		// 	return setError(true), setErrorMessage('Please continue with Google instead.')
		// } else {
		// 	setError(false), setErrorMessage('')
		// }

		signIn('email', { email, redirect: false })

		toast({
			position: 'top-center',
			title: `Verification email sent to ${email}`,
			description: `Please check your inbox and follow the instructions.`
		})
	}

	return (
		<Container>
			<Flex justify="center" py={24}>
				<Flex justify="center">
					<Stack align="center" spacing={6}>
						<Romadan h={64} w={48} />

						<Stack spacing={1} textAlign="center">
							<Text fontSize={30} fontWeight="semibold">
								Log in to your account
							</Text>

							<Text color="muted">You don&apos;t need a password. Is safer that way.</Text>
						</Stack>

						<chakra.form w="full" onSubmit={handleSubmit}>
							<Stack spacing={3}>
								<Stack spacing={3}>
									<Input type="email" placeholder="Email address" size="lg" w="full" isInvalid={error} errorBorderColor={error && 'red.500'} onChange={(e) => setEmail(e.target.value)} />
									{errorMessage && (
										<Text fontSize="sm" color="red.500">
											{errorMessage}
										</Text>
									)}
								</Stack>

								<LightMode>
									<Button type="submit" size="lg" colorScheme="blue">
										Continue with Email
									</Button>
								</LightMode>
							</Stack>
						</chakra.form>

						<Stack direction="row" align="center" spacing={3} w="full">
							<Divider />
							<Text fontSize="sm">OR</Text>
							<Divider />
						</Stack>

						<Stack spacing={3} w="full">
							<Button variant="outline" size="lg" leftIcon={<Google />} onClick={() => signIn('google')}>
								Continue with Google
							</Button>

							<Button variant="outline" size="lg" leftIcon={<Facebook />} onClick={() => signIn('facebook')}>
								Continue with Facebook
							</Button>

							<NextLink href="/" passHref>
								<Button as="a" variant="outline" size="lg" leftIcon={<ArrowLeft size={20} />}>
									Go Back
								</Button>
							</NextLink>
						</Stack>

						<Text fontSize="sm" color="muted">
							Can&apos;t sign in?{' '}
							<chakra.span fontWeight="medium" color="blue.500" cursor="pointer">
								Contact us
							</chakra.span>
						</Text>
					</Stack>
				</Flex>
			</Flex>
		</Container>
	)
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			redirect: {
				destination: '/'
			},

			props: {}
		}
	} else {
		return {
			props: {}
		}
	}
}

export default Login
