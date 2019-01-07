import { createFactory } from 'react'

const getDisplayName = Component => {
	if (!Component) return
	if (typeof Component === 'string') return Component
	return Component.displayName || Component.name || 'Component'
}


const nest = (...Parents) => Child => {
	const components = [...Parents, Child]
	const factories = components.map(createFactory)

	const Nest = ({ children, ...props }) => (
		factories.reduceRight((child, factory) => factory(props, child), children)
	)

	if (process.env.NODE_ENV !== 'production') {
		const displayNames = components.map(getDisplayName)
		Nest.displayName = `nest(${displayNames.join(', ')})`
	}

	return Nest
}

export default nest
