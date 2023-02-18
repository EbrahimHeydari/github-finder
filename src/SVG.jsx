import React from 'react'

const getSVG = (name, props) => {
	switch (name) {
		case 'circle':
			return (
				<circle
					cx='50'
					cy='50'
					r='40'
					stroke={props.stroke}
					stroke-width='3'
					fill={props.fill}
				/>
			)

		case 'rectangle':
			return (
				<rect
					width='200'
					height='100'
					stroke={props.stroke}
					stroke-width='6'
					fill={props.fill}
				/>
			)

		default:
			return (
				<path
					d={props.d}
					fill={props.fill}
					width={props.width}
					height={props.height}
					viewBox={props.viewBox}
				/>
			)
	}
}

const SVG = ({
	d = '',
	name = '',
	style = {},
	fill = '#000000',
	viewBox = '',
	width = '',
	height = '',
	className = '',
	id = '',
	stroke = '',
}) => (
	<svg
		width={width}
		height={height}
		style={style}
		className={className}
		xmlns='http://www.w3.org/2000/svg'
		viewBox={viewBox}
		xmlnsXlink='http://www.w3.org/1999/xlink'
		id={id}>
		{getSVG(name, { fill, stroke, d, fill, width, height, viewBox })}
	</svg>
)
export default SVG
