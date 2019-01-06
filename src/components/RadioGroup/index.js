import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: block;
	margin: 0.5rem 0;
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

const Flex = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 -0.5rem;
`

const Field = styled.input`
	display: none;
`

const Option = styled.label`
	padding: 0.375rem 0.5rem;
`

const RadioLabel = styled.span`
	font-size: 0.875rem;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 0.025rem;
	color: ${p => p.theme.colors.base22};
	cursor: pointer;
	${Field}:checked ~ & {
		color: ${p => p.color || p.theme.colors.base66};
	}
`

const Radio = ({name, value, onChange, label, color, ...props}) => (
	<Option to={name} {...props}>
		<Field name={name} type='radio' value={value} onChange={onChange} />
		<RadioLabel color={color}>{label}</RadioLabel>
	</Option>
)

const RadioGroup = ({name, label, options, radio, ...props}) => (
	<Wrapper {...props}>
		<Label>{label}</Label>
		<Flex>
			{options.map(({value, ...props}) => (
				<Radio
					name={name}
					{...props}
					{...radio(name, value)}
				/>
			))}
		</Flex>
	</Wrapper>
)

export default RadioGroup
