// Description: This is main stage component. It contains all the elements of the scene. It stores 3d molecules and lights.
import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from 'react'
import Shader from '@/templates/Shader/Shader'
import { CameraControls, Environment, SpotLight, Stars, useHelper } from '@react-three/drei'
import useMouse from '@/hooks/useMouse'
import { useFrame, useThree } from '@react-three/fiber'
import { LAMPS, VENUSES, cameraDefault, portalPosition, portalRadius } from '@/utils/global'
import { ScrollTicker, state } from '@/templates/Scroll'
import { useRouter } from 'next/router'

export default function Stage() {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color='red' />
      </mesh>
    </>
  )
}
