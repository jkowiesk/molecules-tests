// r3f make a cylinder that its first base its in position1 and second base its in position2
//
// const bond = new THREE.Mesh(
//   new THREE.CylinderGeometry(0.1, 0.1, 1, 8, 1, false),
//   new THREE.MeshPhongMaterial({ color: 0xaaaaaa })
// )
// bond.position.set(0, 0.5, 0)
// bond.lookAt(position2)
// bond.scale.y = position1.distanceTo(position2)
// bond.name = 'bond'
// bond.userData = { type: 'bond' }
// bon

import { Bond } from '@/utils/types'
import { useHelper } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type Props = {
  position1: THREE.Vector3
  position2: THREE.Vector3
}

export default function BondFC({ position1, position2 }: Props) {
  const bond = useRef<THREE.Mesh>(null)
  const height = position1.distanceTo(position2)

  useEffect(() => {
    if (bond.current) {
      const midpoint = position1.clone().lerp(position2, 0.5)
      bond.current.position.set(midpoint.x, midpoint.y, midpoint.z)

      const direction = position2.clone().sub(position1).normalize()
      bond.current.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction)
    }
  }, [])

  return (
    <>
      <mesh ref={bond}>
        <cylinderGeometry args={[0.1, 0.1, height, 8]} />
        <meshBasicMaterial color={0xaaaaaa} />
      </mesh>
    </>
  )
}
