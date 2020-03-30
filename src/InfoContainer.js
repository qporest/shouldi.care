import React from 'react'

export default class InfoContainer extends React.Component {
	render(){
		return (
			<Header text="more info coming soon..." />
		)
	}
}

function Header(props) {
  return (
    <h1>{props.text}</h1>
  )
}