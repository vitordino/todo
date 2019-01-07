import React from 'react'
import styled from 'styled-components'
import Feather from './Feather'

const Wrapper = styled.label`
	display: flex;
	align-items: center;
	position: relative;
	padding: 0.5rem;
	color: ${p => p.theme.colors.base44};
	&:hover{
		color: ${p => p.theme.colors.base66};
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
				<option value={value}>{label}</option>
			))}
		</Field>
		<Label>{options[value]}</Label>
		{icon && <Feather strokeWidth={2.25} size={20} icon={icon}/>}
	</Wrapper>
)

export default Select
