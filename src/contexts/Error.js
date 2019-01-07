import React, {Component, createContext} from 'react'

// heavily inspired by [recompose](https://git.io/recompose)'s nest

const initialState = null
const Context = createContext(initialState)

class ErrorCatcher extends Component {
	state = initialState

	componentDidCatch({message}) {
		this.setState({message})
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export {ErrorCatcher as Provider}
export default Context
