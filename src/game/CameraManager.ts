// src/game/CameraManager.ts
import * as THREE from 'three';

export class CameraManager {
    public camera: THREE.PerspectiveCamera;
  
    constructor() {
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.set(0, 5, 5); // Ajuste a posição da câmera
      this.camera.lookAt(0, 0, 0); // Olha para o centro da cena
    }
  }