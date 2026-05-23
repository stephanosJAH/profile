import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export function useViewTransitionRouter() {
  const navigate = useNavigate()

  const transitionalNavigate = useCallback(
    (to: string | number) => {
      if (typeof to === 'number') {
        if (document.startViewTransition) {
          document.startViewTransition(() => navigate(to))
        } else {
          navigate(to)
        }
        return
      }

      if (document.startViewTransition) {
        document.startViewTransition(() => navigate(to))
      } else {
        navigate(to)
      }
    },
    [navigate]
  )

  return transitionalNavigate
}
