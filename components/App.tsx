'use client'
// This is a Client Component
// It receives data as props, has access to state and effects, and is
// prerendered on the server during the initial page load.


import { excaliburRef } from "@/hooks/useExcaliburGame"
import dynamic from "next/dynamic";
import { RefObject, useRef } from "react"

const ExcaliburGame = dynamic<excaliburRef>(() => import('./ExcaliburGame'), {
  ssr: false,
  // width/height copied from game config in main.ts
  loading: () => <div style={{width:800,height: 600}}></div>
});
export default function App() {

    const excaliburRef = useRef(null)

    return (
      <main>
        <ExcaliburGame excaliburRef={excaliburRef}/>
      </main>
    )
  }