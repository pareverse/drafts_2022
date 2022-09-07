import NextLink from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Avatar, Box, Button, chakra, Container, Flex, IconButton, LightMode, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Romadan from './logos/romadan'
import { Bell, ChevronDown, MessageSquare, Moon, Search, ShoppingBag, Sun } from 'react-feather'

const Header = () => {
	const { data: session } = useSession()
	const { toggleColorMode } = useColorMode()
	const colorModeIcon = useColorModeValue(<Moon size={18} />, <Sun size={18} />)
	console.log(session)

	return (
		<chakra.header bg="#FFFFFF98" position="sticky" top={0} zIndex={100} backdropFilter="blur(12px)" _dark={{ bg: '#17192398' }}>
			<Container>
				<Flex align="center" gap={6} h="72px">
					<Flex flex={1} justify="start">
						<NextLink href="/" passHref>
							<Stack as="a" direction="row" align="center" spacing={3}>
								<Romadan />

								<Text fontSize={24} fontWeight="semibold">
									Romadan
								</Text>
							</Stack>
						</NextLink>
					</Flex>

					<Flex flex={2} justify="center">
						<Stack direction="row" spacing={8}>
							<NextLink href="/" passHref>
								<Text as="a" fontSize="sm" fontWeight="medium">
									Home
								</Text>
							</NextLink>

							<NextLink href="/" passHref>
								<Stack direction="row" align="center" spacing={2} cursor="pointer">
									<Text as="a" fontSize="sm" fontWeight="medium">
										Products
									</Text>

									<ChevronDown size={16} />
								</Stack>
							</NextLink>

							<NextLink href="/" passHref>
								<Stack direction="row" align="center" spacing={2} cursor="pointer">
									<Text as="a" fontSize="sm" fontWeight="medium">
										Services
									</Text>

									<ChevronDown size={16} />
								</Stack>
							</NextLink>

							<NextLink href="/" passHref>
								<Text as="a" fontSize="sm" fontWeight="medium">
									Blogs
								</Text>
							</NextLink>

							<NextLink href="/" passHref>
								<Text as="a" fontSize="sm" fontWeight="medium">
									Contact us
								</Text>
							</NextLink>
						</Stack>
					</Flex>

					<Flex flex={1} justify="end">
						<Stack direction="row" align="center" spacing={3}>
							<IconButton variant="ghost" icon={<Search size={18} />} />
							<IconButton variant="ghost" icon={<ShoppingBag size={18} />} />
							{session && (
								<>
									<IconButton variant="ghost" icon={<MessageSquare size={18} />} />
									<IconButton variant="ghost" icon={<Bell size={18} />} />
								</>
							)}
							<IconButton variant="ghost" icon={colorModeIcon} onClick={toggleColorMode} />

							{session ? (
								<Box>
									<Menu>
										<MenuButton as={Avatar} name={session.user.name} src={session.user.image} size="sm" cursor="pointer" />

										<MenuList>
											<MenuItem onClick={() => signOut()}>Log out</MenuItem>
										</MenuList>
									</Menu>
								</Box>
							) : (
								<LightMode>
									<NextLink href="/login" passHref>
										<Button as="a" colorScheme="blue">
											Sign in
										</Button>
									</NextLink>
								</LightMode>
							)}
						</Stack>
					</Flex>
				</Flex>
			</Container>
		</chakra.header>
	)
}

export default Header
