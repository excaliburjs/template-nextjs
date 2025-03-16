'use client'

import { useRef, useState } from "react"
import ExcaliburGame, { IRefExcaliburGame } from "./ExcaliburGame"



// This is a Client Component
// It receives data as props, has access to state and effects, and is
// prerendered on the server during the initial page load.
export default function App() {

    const excaliburRef = useRef<IRefExcaliburGame>(null)
    const [someState, setSomeState] = useState(false)

    return (
      <main>
          <ExcaliburGame ref={excaliburRef} setSomeState={setSomeState}/>
      </main>
    )
  }