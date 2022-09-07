export default {
	global: {
		'*, *::before, &::after': {
			letterSpacing: 'inherit',
			borderColor: 'border'
		},

		html: {
			lineHeight: '1.5',
			letterSpacing: '0.025rem',
			scrollBehavior: 'smooth'
		},

		body: {
			bg: 'bg-surface',
			color: 'default'
		},

		'*::placeholder': {
			opacity: 1,
			color: 'muted'
		}
	}
}
