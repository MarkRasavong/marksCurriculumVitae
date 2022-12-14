import { ThemeProvider } from 'styled-components'

import theme from '../themes/default'
import GlobalStyles from './globals'

interface ThemeProps {
	children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		{children}
	</ThemeProvider>
)

export default Theme
