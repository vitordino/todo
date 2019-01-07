import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useAuthState, useAuthActions } from '../utils/firebase-hooks'
import { Paragraph } from './Text'
import Container from './Container'
import Feather from './Feather'

const Wrapper = styled.div`
	background: ${p => p.theme.colors.white};
	top: 0;
	position: sticky;
	z-index: 2;
`

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Button = styled.button`
	margin: 0;
	border: 0;
	display: flex;
	appearence: none;
	padding: 0.5rem;
	border-radius: 0.25rem;
	margin: 0.675rem 0 0.675rem 1rem;
	cursor: pointer;
	background: ${p => p.theme.colors.base03};
	color: ${p => p.theme.colors.base44};
	&:hover {
		background: ${p => p.theme.colors.base06};
		color: ${p => p.theme.colors.base88};
	}
`

const ButtonText = styled.div`
	font-size: 0.875rem;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 0.025rem;
	margin: 0 0.375rem;
`

const Navbar = () => {
	const { uid, loading } = useAuthState()
	const { signIn, signOut } = useAuthActions()

	return (
		<Wrapper>
			<Container>
				<Flex>
					<Paragraph size={2} uppercase weight={600} style={{padding: '0.875rem'}}>
						To — Do
					</Paragraph>
					{!loading && (
						<Button onClick={uid ? signOut : signIn}>
							<ButtonText>{uid ? 'Log out' : 'Log in'}</ButtonText>
							<Feather
								size={18}
								strokeWidth={2.375}
								icon={uid ? 'log-out' : 'log-in'}
								style={{display: 'block'}}
							/>
						</Button>
					)}
				</Flex>
			</Container>
		</Wrapper>
	)
}

export default Navbar
