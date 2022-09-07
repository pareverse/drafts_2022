import { useState, useEffect } from 'react'
import { Button, chakra, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Stack, Text } from '@chakra-ui/react'
import Google from './google'
import { Menu as IconMenu } from 'react-feather'
import Logo from './logo'

const Header = () => {
	const [isScrolling, setIsScrolling] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				setIsScrolling(window.pageYOffset > 0)
			})
		}
	}, [])

	return (
		<chakra.header bg="bg-surface" position="sticky" top={0} shadow={isScrolling && 'sm'} transition=".4s" zIndex={100} _dark={{ shadow: isScrolling && 'sm-dark' }}>
			<Container>
				<Flex align="center" gap={6} h={16}>
					<Logo display={{ base: 'none', md: 'block' }} />

					<Menu closeOnSelect={false}>
						<MenuButton as={IconButton} variant="outline" display={{ base: 'inline-flex', md: 'none' }} icon={<IconMenu size={20} />} />

						<MenuList>
							<MenuItem as="a" href="#" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
								Home
							</MenuItem>

							<MenuItem as="a" href="#services" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
								Services
							</MenuItem>

							<MenuItem as="a" href="#blogs" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
								Blogs
							</MenuItem>

							<MenuItem as="a" href="#about" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
								About Us
							</MenuItem>

							<MenuItem as="a" href="#contact" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
								Contact Us
							</MenuItem>
						</MenuList>
					</Menu>

					<Spacer />

					<Stack display={{ base: 'none', md: 'flex' }} direction="row" align="center" spacing={6}>
						<Text as="a" href="#" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
							Home
						</Text>

						<Text as="a" href="#services" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
							Services
						</Text>

						<Text as="a" href="#blogs" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
							Blogs
						</Text>

						<Text as="a" href="#about" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
							About Us
						</Text>

						<Text as="a" href="#contact" fontSize="sm" fontWeight="medium" transition=".4s" _hover={{ color: 'blue.500' }}>
							Contact Us
						</Text>
					</Stack>

					<Button variant="outline" leftIcon={<Google />}>
						Sign In
					</Button>
				</Flex>
			</Container>
		</chakra.header>
	)
}

export default Header
