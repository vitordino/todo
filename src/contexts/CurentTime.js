import React, {createContext, useContext, useState, useEffect} from 'react'

const identity = x => x
const initialState = Date.now()
const Context = createContext(initialState)

export const Provider = ({children}) => {
	const [currentTime, setCurrentTime] = useState(initialState)

	useEffect(() => {
		const interval = setInterval(() => setCurrentTime(Date.now()), 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<Context.Provider value={currentTime}>{children}</Context.Provider>
	)
}

export default Context
export const useCurrentTime = (fn = identity) => fn(useContext(Context))
