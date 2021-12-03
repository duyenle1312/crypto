import React from 'react'

const Progress_bar = ({ bgcolor, progress, height }) => {

	const Parentdiv = {
		height: height,
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
	}

	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius: 40,
		textAlign: 'right'
	}

	const progresstext = {
		paddingTop: 8,
		fontSize: '0.6rem',
		color: 'black',
		fontWeight: 900
	}

	return (
		<div style={Parentdiv}>
			<div style={Childdiv}>
				<span style={progresstext}>{`${progress}%`}</span> {/*{`${progress}%`}*/}
			</div>
		</div>
	)
}

export default Progress_bar;
