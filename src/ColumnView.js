import React from 'react'
import './ColumnView.css'

export default function ColumnView(props){
	return (
		<div className="column-view">
			{props.children}
		</div>
	)
}