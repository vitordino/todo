import {formatDistance} from 'date-fns'
import {useCurrentTime} from '../contexts/CurentTime'

const RelativeTime = ({ time }) => {
	const currentTime = useCurrentTime()
	return formatDistance(new Date(time), new Date(currentTime), { addSuffix: true })
}

export default RelativeTime
