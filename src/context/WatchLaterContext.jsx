import { createContext, useState, useEffect } from 'react'

const LOCAL_STORAGE_KEY = 'nxtflix_watch_later'

const WatchLaterContext = createContext({
  watchLater: [],
  isInWatchLater: () => false,
  toggleWatchLater: () => {},
  removeFromWatchLater: () => {},
})

export const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState(() => {
    try {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
      return storedData ? JSON.parse(storedData) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(watchLater))
    } catch {
      // ignore
    }
  }, [watchLater])

  const isInWatchLater = (id) => {
    return watchLater.some((movie) => String(movie.id) === String(id))
  }

  const toggleWatchLater = (movie) => {
    if (!movie || !movie.id) return

    setWatchLater((prevList) => {
      const exists = prevList.some((item) => String(item.id) === String(movie.id))
      if (exists) {
        return prevList.filter((item) => String(item.id) !== String(movie.id))
      }
      return [...prevList, movie]
    })
  }

  const removeFromWatchLater = (id) => {
    if (!id) return
    setWatchLater((prevList) => prevList.filter((item) => String(item.id) !== String(id)))
  }

  return (
    <WatchLaterContext.Provider
      value={{
        watchLater,
        isInWatchLater,
        toggleWatchLater,
        removeFromWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  )
}

export default WatchLaterContext
