import { Suspense } from "react"
import '@/styles/global-style.scss'
import Spinner from "@/components/Spinner"
import Routers from "@/routes/Routers"

function App() {

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routers />
      </Suspense>
    </div>
  )
}

export default App
