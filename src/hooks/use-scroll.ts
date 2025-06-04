import { useEffect, useState } from 'react'
import { throttle } from '@/lib/utils'

export function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let prevScrollY = window.scrollY

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrollingDown(currentScrollY > prevScrollY)
      prevScrollY = currentScrollY
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollY, isScrollingDown }
}