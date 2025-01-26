'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { OrbitControls, useGLTF, useAnimations, Environment } from '@react-three/drei'
import React, { Suspense } from 'react'

export const Model = () => {
  const mesh = useRef(null)

  const { scene, animations } = useGLTF('/spheron.glb')
  const { actions } = useAnimations(animations, mesh)
  const color = '#fe388b'

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
      mesh.current.rotation.x += 0.02
    }
  })

  useEffect(() => {
    if (actions && actions.MorphBake) {
      actions.MorphBake.timeScale = 0.5 
      actions.MorphBake.play()
    }
  }, [actions])

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material && child.material.color) {
        child.material.color.set(color)
      }
    })
  }, [scene, color])

  return (
    <mesh ref={mesh}>
      <primitive object={scene} />
    </mesh>
  )
}

export const Globe = () => {
  return (
    <div className="flex h-1/2 w-full items-center justify-center">
      <Canvas camera={{ position: [3, 3, 3], fov: 30 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Globe;