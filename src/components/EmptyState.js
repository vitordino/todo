import React from 'react'
import styled from 'styled-components'
import { Heading } from './Text'

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem 1rem;
	cursor: ${p => p.onClick ? 'pointer' : 'default'};
`

const Image = styled.img`
	display: block;
	mix-blend-mode: multiply;
	max-width: 20rem;
	user-select: none;
	draggable: none;
`

// all image credits go to Noah Jacobus for MetaLab
// https://dribbble.com/shots/5056311-Build-Generate-Quotes

const EmptyState = ({img = 1, children, ...props}) => (
	<Wrapper {...props}>
		{img && <Image draggable='none' src={`/assets/images/empty${img}.png`}/>}
		{children && (
			<Heading
				size={3}
				color={p => p.theme.colors.base44}
				style={{fontWeight: 300, maxWidth: '24rem'}}>
				{children}
			</Heading>
		)}
	</Wrapper>
)

export default EmptyState
