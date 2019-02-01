import { createGlobalStyle } from 'styled-components'
import reset from 'minireset.css'

const GlobalStyle = createGlobalStyle`
	${reset}
	${({theme}) => `
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
	`}
`

export default GlobalStyle
