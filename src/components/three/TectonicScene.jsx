import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeProvider';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './TectonicScene.module.css';

/* ------------------------------------------------------------------ *
 * Signature visual: a depth "zoom" tunnel.
 * A stack of square wireframe frames recede into the distance and fly
 * continuously toward the camera, recycling to the far end — an endless
 * zoom into depth. Monochrome graphite + teal accent frames, a gentle
 * spiral, and cursor parallax. Echoes the site's frame/grid motif.
 * Performance: ~18 shared-geometry line frames, capped DPR, no assets,
 * static (non-moving) under reduced motion.
 * ------------------------------------------------------------------ */

const COUNT = 18;
const SPACING = 1.85;
const CAM_Z = 6;
const FRAME_W = 6.4;
const FRAME_H = 4.1;
const TOTAL = COUNT * SPACING;

function Tunnel({ reduced, dark }) {
  const group = useRef();
  const frames = useRef([]);
  const pointer = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  // One shared square-outline geometry, scaled per frame.
  const [geo] = useState(() => {
    const pts = new Float32Array([
      -0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0, -0.5, 0.5,
      0, -0.5, -0.5, 0,
    ]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    return g;
  });

  const graphite = dark ? '#626a74' : '#8b929c';
  const teal = dark ? '#46ecd9' : '#11b3a1';

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      pointer.current.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced]);

  useFrame((state, delta) => {
    if (group.current && !reduced) {
      pointer.current.x += (pointer.current.tx - pointer.current.x) * Math.min(1, delta * 2);
      pointer.current.y += (pointer.current.ty - pointer.current.y) * Math.min(1, delta * 2);
      group.current.rotation.y += (pointer.current.x * 0.12 - group.current.rotation.y) * Math.min(1, delta * 2);
      group.current.rotation.x += (pointer.current.y * 0.08 - group.current.rotation.x) * Math.min(1, delta * 2);
    }

    for (let i = 0; i < frames.current.length; i++) {
      const m = frames.current[i];
      if (!m) continue;
      if (!reduced) {
        m.position.z += delta * 2.2; // fly toward the camera
        if (m.position.z > CAM_Z) m.position.z -= TOTAL; // recycle to the back
      }
      // Fade out as a frame reaches the camera; fade in from the far end.
      const dz = CAM_Z - m.position.z;
      const near = Math.min(1, Math.max(0, dz / 2.2));
      const far = Math.min(1, Math.max(0, (TOTAL - dz) / 6));
      m.material.opacity = near * far;
    }
  });

  return (
    <group ref={group} position={[1.7, 0.1, 0]}>
      {Array.from({ length: COUNT }).map((_, i) => (
        <lineSegments
          key={i}
          ref={(el) => (frames.current[i] = el)}
          geometry={geo}
          position={[0, 0, CAM_Z - 0.9 - i * SPACING]}
          rotation={[0, 0, i * 0.05]}
          scale={[FRAME_W, FRAME_H, 1]}
        >
          <lineBasicMaterial
            color={i % 4 === 0 ? teal : graphite}
            transparent
            opacity={0}
            depthWrite={false}
          />
        </lineSegments>
      ))}
    </group>
  );
}

function Rig({ reduced, dark }) {
  return (
    <Suspense fallback={null}>
      <Tunnel reduced={reduced} dark={dark} />
    </Suspense>
  );
}

export function TectonicScene() {
  const { theme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const dark = theme === 'dark';

  return (
    <div className={styles.canvasWrap} aria-hidden="true">
      <Canvas
        className={styles.canvas}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, CAM_Z], fov: 52 }}
        frameloop={reduced ? 'demand' : 'always'}
      >
        <Rig reduced={reduced} dark={dark} />
      </Canvas>
    </div>
  );
}
