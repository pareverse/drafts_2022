import { useSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Payments = () => {
	const { data: session } = useSession()

	return (
		<C.GridItem colSpan={12}>
			<Card>
				<C.Stack spacing={6} p={6}>
					<C.Text fontWeight="semibold">Payments</C.Text>
				</C.Stack>

				<C.TableContainer>
					<C.Table>
						<C.Thead>
							<C.Tr>
								<C.Th>#</C.Th>
								<C.Th>Company</C.Th>
								<C.Th>Tenant</C.Th>
								<C.Th textAlign="center">Unit</C.Th>
								<C.Th textAlign="center">Amount</C.Th>
								<C.Th textAlign="center">Date</C.Th>
								<C.Th textAlign="center">Status</C.Th>
								<C.Th textAlign="center">Pay</C.Th>
								<C.Th></C.Th>
							</C.Tr>
						</C.Thead>

						<C.Tbody>
							{[...Array(5)].map((data, index) => (
								<C.Tr key={index}>
									<C.Td>{index + 1}</C.Td>

									<C.Td maxW={180}>
										<C.Stack direction="row" spacing={3} align="center">
											<C.Avatar size="xs" name={session.user.name} src={session.user.image} />

											<C.Text overflow="hidden" textOverflow="ellipsis">
												ABC Company
											</C.Text>
										</C.Stack>
									</C.Td>

									<C.Td maxW={180}>
										<C.Text overflow="hidden" textOverflow="ellipsis">
											{session.user.name}
										</C.Text>
									</C.Td>

									<C.Td textAlign="center">{110 + index}</C.Td>

									<C.Td textAlign="center">₱25,000</C.Td>

									<C.Td textAlign="center">June 12, 2022</C.Td>

									<C.Td textAlign="center">
										<C.Badge colorScheme="yellow">Pending</C.Badge>
									</C.Td>

									<C.Td textAlign="center">
										<C.Badge bg="blue.500" color="white">
											Gcash
										</C.Badge>
									</C.Td>

									<C.Td textAlign="right">
										<C.IconButton variant="outline" size="sm" icon={<I.MoreHorizontal size={14} />} />
									</C.Td>
								</C.Tr>
							))}
						</C.Tbody>
					</C.Table>
				</C.TableContainer>

				<C.Stack direction="row" justify="space-between" spacing={6} p={6}>
					<C.Box>
						<C.Select>
							<option>5</option>
						</C.Select>
					</C.Box>

					<C.Stack direction="row" spacing={3}>
						<C.IconButton icon={<I.ChevronLeft size={16} />} />
						<C.IconButton icon={<I.ChevronRight size={16} />} />
					</C.Stack>
				</C.Stack>
			</Card>
		</C.GridItem>
	)
}

export default Payments
