import Desktop from '@/desktop'
import useGitHubStore from '@store/useGitHubStore'
import { useEffect } from 'react'

const App = (): JSX.Element => {

  const github = useGitHubStore()

  useEffect(() => {

    const url: string = "https://api.github.com/repos/njavilas2015/godis/releases/latest"

    const controller: AbortController = new AbortController()

    github.fetch(url, controller.signal)

    return () => {

      controller.abort()
    }

  }, [])

  return (
    <Desktop>

    </Desktop>
  )
}

export default App