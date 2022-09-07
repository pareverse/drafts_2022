import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Avatar, Badge, Box, Button, chakra, Container, Divider, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Bell, Lock, LogOut, MapPin, Menu as IconMenu, MessageSquare, Moon, Settings, Sun, User } from 'react-feather'
import Google from './google'

const Header = ({ onOpen }) => {
	const router = useRouter()
	const { data: session } = useSession()
	const [isScrolling, setIsScrolling] = useState(false)
	const { toggleColorMode } = useColorMode()
	const colorModeIcon = useColorModeValue(<Moon size={20} />, <Sun size={20} />)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				setIsScrolling(window.pageYOffset > 0)
			})
		}
	}, [])

	if (session) {
		return (
			<chakra.header bg="bg-surface" position="sticky" top={0} zIndex={98}>
				<Flex align="center" justify="space-between" px={6} h={16}>
					<IconButton variant="outline" display={{ base: 'inline-flex', md: 'none' }} icon={<IconMenu size={20} />} onClick={onOpen} />

					<Stack display={{ base: 'none', md: 'flex' }} direction="row" align="center" spacing={6}>
						<NextLink href="/" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
								Dashboard
							</Text>
						</NextLink>

						<NextLink href="/blogs" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('blogs') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
								Accounts
							</Text>
						</NextLink>

						<NextLink href="/contact" passHref>
							<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('contact') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
								Settings
							</Text>
						</NextLink>
					</Stack>

					<Stack direction="row" align="center" spacing={2}>
						<IconButton variant="ghost" icon={<MessageSquare size={20} />} />
						<IconButton variant="ghost" icon={<Bell size={20} />} />
						<IconButton variant="ghost" icon={colorModeIcon} onClick={toggleColorMode} />

						<Box>
							<Menu>
								<MenuButton as={Avatar} size="sm" cursor="pointer" name={session.user.name} src={session.user.image} />

								<MenuList bg="bg-surface" mt={2} borderColor="border" p={0} w={{ base: 300, md: 348 }}>
									<Stack align="center" spacing={6} p={6}>
										<Avatar size="xl" name={session.user.name} src={session.user.image} />

										<Stack align="center" spacing={3}>
											<Stack align="center" spacing={0}>
												<Text fontWeight="medium">{session.user.name}</Text>

												<Text fontSize="sm" color="muted">
													{session.user.email}
												</Text>
											</Stack>

											<Badge bg="blue.500" color="white">
												Administrator
											</Badge>
										</Stack>

										<Button variant="outline" borderColor="border" w="full">
											View Profile
										</Button>
									</Stack>

									<Divider borderColor="border" />

									<Stack direction="row" justify="center" spacing={6} p={3}>
										<IconButton variant="ghost" icon={<Settings size={20} />} />
										<IconButton variant="ghost" icon={<Lock size={20} />} />
										<IconButton variant="ghost" icon={<LogOut size={20} />} onClick={() => signOut()} />
									</Stack>
								</MenuList>
							</Menu>
						</Box>
					</Stack>
				</Flex>
			</chakra.header>
		)
	} else {
		return (
			<chakra.header bg="bg-surface" position="sticky" top={0} shadow={isScrolling && 'sm'} transition=".4s" zIndex={98} _dark={{ shadow: isScrolling && 'sm-dark' }}>
				<Container>
					<Flex justify="space-between" align="center" h="72px">
						<Box display={{ base: 'inline-flex', md: 'none' }}>
							<Menu>
								<MenuButton as={IconButton} variant="outline" icon={<IconMenu size={20} />} />

								<MenuList>
									<NextLink href="/" passHref>
										<MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
											Home
										</MenuItem>
									</NextLink>

									<NextLink href="/blogs" passHref>
										<MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('blogs') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
											Blogs
										</MenuItem>
									</NextLink>

									<NextLink href="/services" passHref>
										<MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('services') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
											Services
										</MenuItem>
									</NextLink>

									<NextLink href="/contact" passHref>
										<MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('contact') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
											Contact us
										</MenuItem>
									</NextLink>
								</MenuList>
							</Menu>
						</Box>

						<Stack display={{ base: 'none', md: 'flex' }} direction="row" align="center">
							<MapPin size={16} />

							<Text as="h1" fontWeight="medium" letterSpacing={2}>
								TSVJ CENTER
							</Text>
						</Stack>

						<Stack direction="row" spacing={6}>
							<Stack display={{ base: 'none', md: 'flex' }} direction="row" align="center" spacing={6}>
								<NextLink href="/" passHref>
									<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
										Home
									</Text>
								</NextLink>

								<NextLink href="/blogs" passHref>
									<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('blogs') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
										Blogs
									</Text>
								</NextLink>

								<NextLink href="/services" passHref>
									<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('services') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
										Services
									</Text>
								</NextLink>

								<NextLink href="/contact" passHref>
									<Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('contact') && 'blue.500'} transition=".4s" _hover={{ color: 'blue.500' }}>
										Contact us
									</Text>
								</NextLink>
							</Stack>

							<Button variant="outline" leftIcon={<Google />} onClick={() => signIn('google')}>
								Sign In
							</Button>
						</Stack>
					</Flex>
				</Container>
			</chakra.header>
		)
	}
}

export default Header
