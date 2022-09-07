const baseStyle = {
	table: {
		whiteSpace: 'nowrap'
	},

	th: {
		fontWeight: 'medium',
		textTransform: 'normal',
		letterSpacing: 'inherit',
		whiteSpace: 'nowrap'
	},

	thead: {
		outline: '1px solid #E2E8F0',
		_dark: {
			outline: '1px solid #2D3748'
		},

		th: {
			border: 'none'
		}
	},

	tbody: {
		td: {
			border: 'none',
			fontWeight: 'medium'
		}
	}
}

const sizes = {
	md: {
		th: {
			lineHeight: '1.25rem',
			fontSize: 'xs'
		},

		td: {
			fontSize: 'xs'
		}
	}
}

export default {
	baseStyle,
	sizes
}
