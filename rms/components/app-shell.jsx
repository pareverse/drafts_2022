import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { chakra, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import Header from './header'
import Sidebar from './sidebar'

const AppShell = ({ children }) => {
	const { data: session } = useSession()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

	useEffect(() => {
		if (isLargerThan768) onClose()
	}, [isLargerThan768])

	if (session) {
		return (
			<>
				<Sidebar isOpen={isOpen} onClose={onClose} />

				<chakra.div position={{ base: 'block', md: 'sticky' }} left={{ base: 0, md: 256 }} w={{ base: 'full', md: 'calc(100% - 256px)' }}>
					<Header onOpen={onOpen} />

					<chakra.main p={6}>{children}</chakra.main>
				</chakra.div>
			</>
		)
	} else {
		return (
			<>
				<Header />
				{children}
			</>
		)
	}
}

export default AppShell
