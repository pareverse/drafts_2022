import { chakra, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Card from 'components/card'

const Features = () => {
	return (
		<chakra.section py="88px">
			<Container>
				<Stack align="center" spacing={3}>
					<Heading fontSize={32} textAlign="center">
						Why Choose Us
					</Heading>

					<Text fontSize="lg" color="muted">
						We believe that a smile remains the most inexpensive gift.
					</Text>
				</Stack>

				<SimpleGrid columns={{ base: 1, md: 3 }} mt={12} spacing={6}>
					<Card px={6} py={12}>
						<Stack align="center" spacing={6}>
							<Image boxSize="96px" src="/icons/1.png" />

							<Stack spacing={3}>
								<Text fontSize="lg" fontWeight="semibold" textAlign="center">
									Regular high standard care
								</Text>

								<Text textAlign="center" color="muted">
									The dental clinic provides high standard care by continually improving and adding latest techniques for treatments of the patients. To ensure that patients would love and be confident of their smiles.
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card px={6} py={12}>
						<Stack align="center" spacing={6}>
							<Image boxSize="96px" src="/icons/2.png" />

							<Stack spacing={3}>
								<Text fontSize="lg" fontWeight="semibold" textAlign="center">
									Concerned with safety
								</Text>

								<Text textAlign="center" color="muted">
									Before treating you, dentists are trained to cleanse their hands. Clean, replace, and cover tools in between uses. More frequently disinfect all surfaces and tools. Wear additional protective equipment. Check the patient&apos;s temperature.
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card px={6} py={12}>
						<Stack align="center" spacing={6}>
							<Image boxSize="96px" src="/icons/3.png" />

							<Stack spacing={3}>
								<Text fontSize="lg" fontWeight="semibold" textAlign="center">
									Comfortable Dental Care
								</Text>

								<Text textAlign="center" color="muted">
									The dental office of Dr. Jevemille Pascual-Camillon works hard to ensure that every dental diagnosis is accurate by using the most up-to-date technologies and every dental procedure is comfortable for its patients.
								</Text>
							</Stack>
						</Stack>
					</Card>
				</SimpleGrid>
			</Container>
		</chakra.section>
	)
}

export default Features
