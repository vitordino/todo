import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.label`
	display: block;
	margin: 0.75rem 0;
	border-bottom: ${p => !p.small && `1px solid ${p.theme.colors.base11}`};
`

const Label = styled.div`
	display: block;
	font-size: 0.75rem;
	line-height: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 0.025rem;
	color: ${p => p.theme.colors.base44};
`

const Field = styled.input`
	font: inherit;
	border: 0;
	background: none;
	width: 100%;
	outline: none;
	font-size: ${p => p.small ? '0.875rem' : '1.25rem'};
	line-height: ${p => p.small ? '1rem' : '1rem'};
	color: ${p => p.small ? p.theme.colors.base66 : p.theme.colors.base88};
	font-weight: ${p => p.small && '500'};
	padding: 0.375rem 0;
	&::placeholder{
		color: ${p => p.theme.colors.base22};
	}
`

const Input = ({
	name,
	label,
	value,
	onChange,
	type,
	required,
	placeholder,
	small,
	...props,
}) => (
	<Wrapper to={name} HTMLfor={name} small={small} {...props}>
		<Label>{label}</Label>
		<Field
			name={name}
			id={name}
			type={type}
			value={value}
			onChange={onChange}
			required={required}
			placeholder={placeholder}
			small={small}
		/>
	</Wrapper>
)

export default Input
