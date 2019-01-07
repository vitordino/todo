import { useState } from 'react'

export const useInputState = initialState => {
	const [state, setState] = useState(initialState)
	return [state, e => setState(e.target.value)]
}

export const useErrorPropagation = fn => {
	const [error, setError] = useState(null)

	// useEffect(() => setError(null), [fn])
	if(error) throw error

	return async (...args) => {
		try{
			await fn(...args)
		}catch(e){
			setError(e)
		}
	}
}
