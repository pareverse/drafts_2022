import { chakra, Container, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
	return (
		<chakra.footer>
			<Container>
				<Flex justify="center" align="center" h={16}>
					<Text fontSize="sm">Copyright © 2022, Dr, Jevemille Pascual Dental Clinic</Text>
				</Flex>
			</Container>
		</chakra.footer>
	)
}

export default Footer
