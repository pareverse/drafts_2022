const Romadan = ({ h, w }) => {
	return (
		<svg width={w ? w : 24} height={h ? h : 32} viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M18 18L0 12V18L18 24V18Z" fill="#4C97FF" />
			<path d="M18 6L0 0V6L18 12V6Z" fill="#4C97FF" />
			<path d="M18 12L0 18V12L18 6V12Z" fill="#006AFF" />
		</svg>
	)
}

export default Romadan
