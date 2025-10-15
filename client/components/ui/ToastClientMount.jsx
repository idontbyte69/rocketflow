"use client"

import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'

export default function ToastClientMount(props) {
  const containerRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => {
    let mounted = true
    import('react-toastify').then((mod) => {
      if (!mounted) return
      const Candidate = mod.ToastContainer || (mod.default && mod.default.ToastContainer) || mod.default || null
      if (!Candidate) return
      if (containerRef.current) {
        try {
          rootRef.current = createRoot(containerRef.current)
          rootRef.current.render(React.createElement(Candidate, {
            position: 'bottom-right',
            autoClose: 4000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            ...props
          }))
        } catch (e) {
          // ignore
        }
      }
    }).catch(() => {})

    return () => {
      mounted = false
      try { rootRef.current && rootRef.current.unmount() } catch (e) {}
    }
  }, [])

  return <div ref={containerRef} />
}
