'use client'

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import { IPropsExcaliburGame, IRefExcaliburGame } from "./ExcaliburGame"

const ExcaliburGame = dynamic<IPropsExcaliburGame>(() => import('./ExcaliburGame'), {
  ssr: false,
  // width/height copied from game config in main.ts
  loading: () => <div style={{width:800,height: 600}}></div>
});

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