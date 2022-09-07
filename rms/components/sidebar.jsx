import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useSession } from 'next-auth/react'
import { Avatar, Badge, Box, chakra, Flex, Stack, Text } from '@chakra-ui/react'
import { Archive, ChevronRight, CreditCard, Edit2, Grid as IconGrid, HelpCircle, MapPin, MessageSquare, PieChart, Settings, Star, Users } from 'react-feather'

const Sidebar = ({ isOpen, onClose }) => {
	const router = useRouter()
	const { data: session } = useSession()

	return (
		<>
			<style jsx global>
				{`
					body {
						overflow: ${isOpen && 'hidden'};
					}
				`}
			</style>

			<chakra.aside bg="gray.900" position="fixed" left={{ base: isOpen ? 0 : -256, md: 0 }} borderRight="1px" borderColor="gray.700" h="100vh" w={256} transition="left .4s" zIndex={100}>
				<Flex align="center" gap={2} h={16} px={6} color="white">
					<MapPin size={16} />

					<Text as="h1" fontWeight="medium" letterSpacing={2}>
						TSVJ CENTER
					</Text>
				</Flex>

				<Box overflowY="auto" p={3} h="calc(100vh - 160px)">
					<NextLink href="/dashboard" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('dashboard') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<PieChart size={16} />
								<Text fontSize="sm">Dashboard</Text>
							</Stack>
						</Flex>
					</NextLink>

					<NextLink href="/messages" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('messages') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<MessageSquare size={16} />
								<Text fontSize="sm">Messages</Text>
							</Stack>

							<Badge bg="blue.500" color="white">
								1
							</Badge>
						</Flex>
					</NextLink>

					<NextLink href="/blogs" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('blogs') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<Edit2 size={16} />
								<Text fontSize="sm">Blogs</Text>
							</Stack>
						</Flex>
					</NextLink>

					<NextLink href="/units" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('units') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<IconGrid size={16} />
								<Text fontSize="sm">Units</Text>
							</Stack>
						</Flex>
					</NextLink>

					<NextLink href="/tenants" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('tenants') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<Users size={16} />
								<Text fontSize="sm">Tenants</Text>
							</Stack>
						</Flex>
					</NextLink>

					<NextLink href="/payments" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('payments') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<CreditCard size={16} />
								<Text fontSize="sm">Payments</Text>
							</Stack>

							<Badge bg="blue.500" color="white">
								3
							</Badge>
						</Flex>
					</NextLink>

					<NextLink href="/accounts" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('accounts') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<Star size={16} />
								<Text fontSize="sm">Accounts</Text>
							</Stack>
						</Flex>
					</NextLink>

					<NextLink href="/archive" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('archive') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<Archive size={16} />
								<Text fontSize="sm">Archive</Text>
							</Stack>
						</Flex>
					</NextLink>

					<NextLink href="/settings" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('settings') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<Settings size={16} />
								<Text fontSize="sm">Settings</Text>
							</Stack>
						</Flex>
					</NextLink>

					<NextLink href="/support" passHref>
						<Flex as="a" justify="space-between" align="center" gap={3} borderRadius="md" px={3} h="45px" color={router.pathname.includes('support') ? 'white' : '#a0aec0'} transition=".4s" _hover={{ color: 'white' }}>
							<Stack direction="row" align="center" spacing={3}>
								<HelpCircle size={16} />
								<Text fontSize="sm">Support</Text>
							</Stack>
						</Flex>
					</NextLink>
				</Box>

				<Box p={6}>
					<NextLink href="/profile" passHref>
						<Flex as="a" bg="#2d374850" justify="space-between" align="center" borderRadius="md" p={3} color="white" transition=".4s" _hover={{ bg: '#2d374875' }}>
							<Stack direction="row" align="center" spacing={3}>
								<Avatar size="xs" name={session.user.name} src={session.user.image} />
								<Text fontSize="xs" fontWeight="medium" noOfLines={1}>
									{session.user.name}
								</Text>
							</Stack>
							<ChevronRight size={16} />
						</Flex>
					</NextLink>
				</Box>
			</chakra.aside>

			<chakra.div bg="gray.900" position="fixed" display={{ base: 'block', md: 'none' }} visibility={isOpen ? 'visible' : 'hidden'} h="100vh" w="full" opacity={isOpen ? 0.5 : 0} transition="opacity .4s" zIndex={99} onClick={onClose} />
		</>
	)
}

export default Sidebar
