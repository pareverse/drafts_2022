import { chakra, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Card from 'components/card'

const Services = () => {
	return (
		<chakra.section id="services" py="88px">
			<Container>
				<Stack align="center" spacing={3}>
					<Heading fontSize={32} textAlign="center">
						Services
					</Heading>

					<Text fontSize="lg" color="muted">
						Dental services that you can trust.
					</Text>
				</Stack>

				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} mt={12} spacing={6}>
					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/4.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Consultation
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/5.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Tooth Extraction
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/6.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Restoration
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/7.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Oral Prophylaxis
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/8.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Removable Partial Denture
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/9.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Complete Denture
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/10.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Denture Repair
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/11.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Orthodontic Treatment
								</Text>
							</Stack>
						</Stack>
					</Card>

					<Card p={6}>
						<Stack direction="row" align="center" spacing={6}>
							<Image boxSize={16} src="/icons/12.png" />

							<Stack align="center" spacing={3}>
								<Text fontSize="lg" fontWeight="semibold">
									Retainers
								</Text>
							</Stack>
						</Stack>
					</Card>
				</SimpleGrid>
			</Container>
		</chakra.section>
	)
}

export default Services
