import { useRouter } from 'next/router'
import Header from './header'

const AppShell = ({ children }) => {
	const router = useRouter()

	return (
		<>
			{!router.pathname.includes('login') && <Header />}
			{children}
		</>
	)
}

export default AppShell
