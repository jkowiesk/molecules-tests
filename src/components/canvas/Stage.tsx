// Description: This is main stage component. It contains all the elements of the scene. It stores 3d molecules and lights.

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
