import { Box, Button, chakra, Container, Flex, Heading, LightMode, Stack, Text } from '@chakra-ui/react'

const Hero = () => {
	return (
		<chakra.section>
			<Container>
				<Flex gap={6} h={640}>
					<Stack justify="center" align={{ base: 'center', lg: 'start' }} spacing={6} w="full">
						<Heading size="2xl" fontWeight="semibold" textAlign={{ base: 'center', lg: 'left' }}>
							Create your <br /> success business.
						</Heading>

						<Text fontSize="lg" textAlign={{ base: 'center', lg: 'left' }} color="muted">
							TSVJ Center is a 3-storey mixed-use building located <chakra.br display={{ base: 'none', md: 'block' }} /> right beside the Las Pinas City Hall, a few met.
						</Text>

						<Stack direction={{ base: 'column', sm: 'row' }} spacing={3} w={{ base: 'full', sm: 'auto' }}>
							<LightMode>
								<Button size="lg" colorScheme="blue">
									Inquire now
								</Button>
							</LightMode>

							<Button variant="outline" size="lg">
								Learn more
							</Button>
						</Stack>
					</Stack>

					<Box display={{ base: 'none', lg: 'block' }} bgImage="url('/assets/background.jpg')" bgSize="cover" bgPosition="center" w="full" />
				</Flex>
			</Container>
		</chakra.section>
	)
}

export default Hero
