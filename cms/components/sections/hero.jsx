import { Box, Button, chakra, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const Hero = () => {
	return (
		<chakra.section pb={16}>
			<Container>
				<Flex gap={6} py={6} h={640}>
					<Stack justify="center" align={{ base: 'center', lg: 'start' }} spacing={6} w="full">
						<Heading fontSize={{ base: 32, md: 48 }} fontWeight="semibold" textAlign={{ base: 'center', lg: 'left' }}>
							A better life starts
							<br /> with a beautiful smile
						</Heading>

						<Text fontSize={{ base: 'md', md: 'lg' }} textAlign={{ base: 'center', lg: 'left' }} color="muted">
							Everything has beauty, but not everyone sees it, think <chakra.br display={{ base: 'none', md: 'block' }} /> wrongly, if you please, but in all cases think for yourself.
							<br /> everytime you smile at someone, it is an action of love.
						</Text>

						<Button size="lg" colorScheme="blue" w={{ base: 'full', md: 'auto' }}>
							Book Now
						</Button>
					</Stack>

					<Box display={{ base: 'none', lg: 'block' }} bgImage="url('/assets/image-1.jpg')" bgSize="cover" bgPosition="center" borderRadius="xl" w="full" />
				</Flex>
			</Container>
		</chakra.section>
	)
}

export default Hero
