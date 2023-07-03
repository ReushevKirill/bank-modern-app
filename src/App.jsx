import styles from './style.js'

import {
	Billing,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
	Hero,
	Navbar,
	Stats,
	Testimonials,
} from './components'

const App = () => (
	// container
	<div className='bg-primary w-full overflow-hidden'>
		{/* navigation */}
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		{/* hero */}
		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		{/* other components */}
		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
)

export default App
