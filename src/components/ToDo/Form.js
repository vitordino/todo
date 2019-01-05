import React from 'react'
import { useFormState } from 'react-use-form-state'
import { addToDo } from '../../actions'
import { useAuthState } from '../../utils/firebase-hooks'

const Form = () => {
	const [formState, {text, select, date}] = useFormState({priority: 'low'})
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
						<option value="low">low</option>
						<option value="mid">medium</option>
						<option value="high">high</option>
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
			<pre>{JSON.stringify(formState, null, 2)}</pre>
		</form>
	)
}


export default Form
