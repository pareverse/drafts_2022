export default {
	global: {
		'*, *::before, &::after': {
			letterSpacing: 'inherit'
		},

		html: {
			lineHeight: '1.5',
			letterSpacing: '0.025rem'
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
