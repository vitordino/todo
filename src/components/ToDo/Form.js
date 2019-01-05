import React, { useMemo } from 'react'
import { useFormState } from 'react-use-form-state'
import { addToDo } from '../../actions'
import { useAuthState } from '../../utils/firebase-hooks'

const Form = () => {
	const initialDueTime = useMemo(() => {
		const now = Date.now()
		const timezone = new Date().getTimezoneOffset() * 60 * 1000
		const localNow = new Date(now - timezone).valueOf()
		const fifteenMinutes = 15 * 60 * 1000
		return new Date(localNow + fifteenMinutes).toISOString().replace(/\..+/, '')
	}, [])

	const initialState = {priority: 0, dueTime: initialDueTime}
	const [formState, {text, select, date}] = useFormState(initialState)
	const { uid } = useAuthState()
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				addToDo(formState.values, uid)
			}}
		>
			<div>
				<label to='title'>
					title <input {...text('title')} required/>
				</label>
			</div>

			<div>
				<label to='priority'>
					priority
					<select {...select('priority')} required>
						<option value="0">low</option>
						<option value="1">medium</option>
						<option value="2">high</option>
					</select>
				</label>
			</div>

			<div>
				<label to='dueTime'>
					due time
					<input {...date('dueTime')} type="datetime-local" required/>
				</label>
			</div>

			<button type='submit'>submit</button>
			{/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
		</form>
	)
}


export default Form
