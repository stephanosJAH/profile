import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { flushSync } from 'react-dom'

export function useViewTransitionRouter() {
  const navigate = useNavigate()

  const transitionalNavigate = useCallback(
    (to: string | number) => {
      if (!document.startViewTransition) {
        navigate(to as any)
        return
      }

      document.startViewTransition(() => {
        flushSync(() => {
          navigate(to as any)
        })
      })
    },
    [navigate]
  )

  return transitionalNavigate
}
