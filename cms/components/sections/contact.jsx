import { Box, chakra, Container, Heading, Stack, Text } from '@chakra-ui/react'

const Contact = () => {
	return (
		<chakra.section id="contact" py="88px">
			<Container>
				<Stack align="center" spacing={3}>
					<Heading fontSize={32} textAlign="center">
						Contact Us
					</Heading>

					<Text fontSize="lg" color="muted">
						Text here
					</Text>
				</Stack>

				<Stack direction="row" spacing={12} mt={12}>
					<Box bgImage="url('/assets/map.png')" bgSize="cover" borderRadius="md" h={500} w="full" />

					<Box bg="gray.50" borderRadius="md" w="full"></Box>
				</Stack>
			</Container>
		</chakra.section>
	)
}

export default Contact
