'use client'
// This is a Client Component
// It receives data as props, has access to state and effects, and is
// prerendered on the server during the initial page load.

import dynamic from "next/dynamic";
import { useRef } from "react"
import { IExcaliburGameComponentProps } from "./ExcaliburGame"

const ExcaliburGame = dynamic<IExcaliburGameComponentProps>(() => import('./ExcaliburGame'), {
  ssr: false,
  // width/height copied from game config in ExcaliburGame.tsx
  loading: () => <div style={{width:800,height: 600}}></div>
});
export default function App() {

    const excaliburRef = useRef(null)

    return (
      <main>
        <ExcaliburGame ref={excaliburRef}/>
      </main>
    )
  }