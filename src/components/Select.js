import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: block;
`
const Field = styled.select`
	display: block;
`

const Select = ({options, ...props}) => (
	<Wrapper {...props}>
		<Field>
			{Object.entries(options).map(([value, label]) => (
				<option value={value}>{label}</option>
			))}
		</Field>
	</Wrapper>
)

export default Select
