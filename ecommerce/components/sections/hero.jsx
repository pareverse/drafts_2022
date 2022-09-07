import { Box, Button, chakra, Container, Flex, Heading, LightMode, Stack, Text } from '@chakra-ui/react'

const Hero = () => {
	return (
		<chakra.section>
			<Container>
				<Flex gap={6} h={640}>
					<Flex flex={1}>
						<Stack spacing={6} justify="center">
							<Heading as="h1" fontSize={48}>
								Romadan <chakra.span color="blue.500">Online Shop</chakra.span>
								<br /> is finally here.
							</Heading>

							<Text fontSize="lg" color="muted">
								One of the best distributors of high-quality water filtration, containers, bottles and printing services.
							</Text>

							<Box>
								<LightMode>
									<Button size="lg" colorScheme="blue">
										Shop Now
									</Button>
								</LightMode>
							</Box>
						</Stack>
					</Flex>

					<Flex flex={1} gap={6} py={12}>
						<Flex bgImage="url('/assets/image-1.png')" bgSize="cover" flex={1} mb={12} borderRadius="xl" />
						<Flex bgImage="url('/assets/image-2.png')" bgSize="cover" flex={1} mt={12} borderRadius="xl" />
						<Flex bgImage="url('/assets/image-3.png')" bgSize="cover" flex={1} mb={12} borderRadius="xl" />
					</Flex>
				</Flex>
			</Container>
		</chakra.section>
	)
}

export default Hero
