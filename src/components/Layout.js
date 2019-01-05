import React, { Fragment } from 'react'
import reset from 'minireset.css'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
	${reset}
	html, body {
		font-family: ${theme.fonts.ibm};
		background: ${theme.colors.base03};
		text-rendering: optimizeLegibility;
		font-smooth: antialised;
		font-smoothing: antialised;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 0, 'tnum' 1, 'onum' 0, 'lnum' 1, 'dlig' 1, 'zero' 1, 'case' 1;
		height: 100%;
	}
	::selection{
		color: ${theme.colors.base03};
		background: ${theme.colors.base66};
	}
	#root{
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}
`

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 100%
`

const Layout = props => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyle/>
			<Content {...props}/>
		</Fragment>
	</ThemeProvider>
)

export default Layout
