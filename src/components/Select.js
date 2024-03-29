import React from 'react'
import styled from 'styled-components'
import Feather from './Feather'

const Wrapper = styled.label`
	display: flex;
	align-items: center;
	position: relative;
	padding: 0.5rem;
	color: ${p => p.theme.colors.base44};
	border-radius: 0.25rem;
	&:hover{
		color: ${p => p.theme.colors.base66};
	}
	&:focus-within{
		box-shadow: 0 0 0 2px dodgerblue;
	}
`
const Field = styled.select`
	position: absolute;
	height: 100%;
	left: 0;
	right: 0;
	width: 100%;
	display: block;
	font-size: 1rem;
	opacity: 0;
`

const Label = styled.div`
	text-transform: uppercase;
	font-size: 0.875rem;
	font-weight: 600;
	letter-spacing: 0.025rem;
	margin-right: 0.125rem;
`

const Select = ({options = [], icon = 'chevron-down', value, ...props}) => (
	<Wrapper {...props}>
		<Field>
			{Object.entries(options).map(([value, label]) => (
				<option key={value} value={value}>{label}</option>
			))}
		</Field>
		<Label>{options[value]}</Label>
		{icon && <Feather strokeWidth={2.25} size={20} icon={icon}/>}
	</Wrapper>
)

export default Select
