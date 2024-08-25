// src/game/Floor.ts
import * as THREE from 'three';

export class Floor {
  public mesh: THREE.Mesh;

  constructor() {
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.rotation.x = -Math.PI / 2; // Deitar o piso para ficar horizontal
    this.mesh.position.y = 0; // Garantir que o piso está na altura 0
    this.mesh.receiveShadow = true;
  }
}