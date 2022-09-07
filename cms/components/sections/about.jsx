import { Box, chakra, Container, Heading, Stack, Text } from '@chakra-ui/react'

const About = () => {
	return (
		<chakra.section id="about" py="88px">
			<Container>
				<Stack align="center" spacing={3}>
					<Heading fontSize={32} textAlign="center">
						About Us
					</Heading>

					<Text fontSize="lg" color="muted">
						We believe that a smile remains the most inexpensive gift.
					</Text>
				</Stack>

				<Stack direction={{ base: 'column-reverse', lg: 'row' }} align="center" mt={12} spacing={12}>
					<Stack spacing={6} w="full">
						<Heading fontSize={{ base: 32, md: 48 }} fontWeight="semibold" textAlign={{ base: 'center', md: 'left' }}>
							Dr. Jevemille Pascual - Camilon Dental Clinic
						</Heading>

						<Text fontSize={{ base: 'md', md: 'lg' }} color="muted">
							is a full-service dental clinic that utilizes cutting-edge technology for the utmost care of our patients. We specialize in offering patients a safe, cost-effective, and relaxing experience, from dental implants to dental treatments in the busy heart of Las Piñas City. Here at Dr. Jevemille Pascual - Camilon Dental Clinic, we strive to create the perfect smile while taking care of you.
						</Text>
					</Stack>

					<Box bgImage="url('/assets/image-3.jpg')" bgSize="cover" bgPosition="center" borderRadius="xl" h={{ base: 250, md: 500 }} w="full" />
				</Stack>
			</Container>
		</chakra.section>
	)
}

export default About
