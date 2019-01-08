export const priorityColors = ['gold', 'coral', 'firebrick']
export const getPriorityColor = ({priority, completed = false, theme}) => {
	if(completed) return theme.colors.base22
	return priorityColors[priority] || '#141618'
}

export const priorityLabels = ['Low', 'Medium', 'High']
export const getPriorityText = (priority, suffix = true) => (
	`${(priorityLabels[priority] || 'No')}${suffix ? ' priority' : ''}`
)

export const getDueTimeColor = ({completed, expired, theme}) => {
	if(completed) return theme.colors.base22
	if(expired) return 'red'
	return theme.colors.base44
}
