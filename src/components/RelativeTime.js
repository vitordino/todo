import React from 'react'
import {distanceInWords} from 'date-fns'
import {useCurrentTime} from '../contexts/CurentTime'

const RelativeTime = ({ time }) => {
	const currentTime = useCurrentTime()
	return distanceInWords(time, new Date(currentTime))
}

export default RelativeTime
