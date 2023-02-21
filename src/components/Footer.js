import React from 'react'
import PropType from 'prop-types'

const Footer = (props) => {
	return (
		<footer className="text-center text-white p-5 justify-content-center" variant="dark" style={{ background: '#343a40' }}>
			Copyright © {props.website} {props.year}
		</footer>
	)
}

Footer.propsTypes = {
	website: PropType.string,
	year: PropType.string
}

export default Footer
