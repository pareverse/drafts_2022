import Hero from 'components/sections/hero'
import Features from 'components/sections/features'
import Services from 'components/sections/services'
import Blogs from 'components/sections/blogs'
import About from 'components/sections/about'
import Contact from 'components/sections/contact'
import Footer from 'components/footer'

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Services />
			<Blogs />
			<About />
			<Contact />
			<Footer />
		</>
	)
}

export default Home
