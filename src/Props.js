import React from 'react'

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Example() {
  return (
    <div>
      <h1>My is in my garage?</h1>
	    <Car brand="Ford" />
    </div>
  )
}

export default Example
