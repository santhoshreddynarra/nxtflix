import { useContext } from 'react'
import WatchLaterContext from '../context/WatchLaterContext'

export const useWatchLater = () => useContext(WatchLaterContext)

export default useWatchLater
