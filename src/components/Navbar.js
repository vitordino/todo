import React from 'react'
import styled from 'styled-components'
import { Paragraph } from './Text'
import Container from './Container'
import Feather from './Feather'

const Wrapper = styled.div`
	background: ${p => p.theme.colors.white};
`

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Button = styled.button`
	margin: 0;
	border: 0;
	display: block;
	appearence: none;
	padding: 0.5rem;
	border-radius: 0.25rem;
	margin: 0.675rem;
	cursor: pointer;
	background: ${p => p.theme.colors.base03};
	color: ${p => p.theme.colors.base44};
	&:hover {
		background: ${p => p.theme.colors.base06};
		color: ${p => p.theme.colors.base88};
	}
`

const Navbar = ({signIn, signOut}) => (
	<Wrapper>
		<Container>
			<Flex>
				<Paragraph size={2} uppercase weight={600}>To — Do</Paragraph>
				{(signIn || signOut) && (
					<Button onClick={signIn || signOut}>
						<Feather size={16} icon={signIn ? 'log-in' : 'log-out'}/>
					</Button>
				)}
			</Flex>
		</Container>
	</Wrapper>
)

export default Navbar
