import React from 'react'

function Jumbotron() {
	return (
		<div className="jumbotron">
			<div className="p-4 mt-4 mb-4 bg-light rounded-2">
				<div className="container-fluid py-5">
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="col-md-12 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<button className="btn btn-primary btn-lg" type="button">Call to action</button>
				</div>
			</div>
		</div>
	)
}

export default Jumbotron
