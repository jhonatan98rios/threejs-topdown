// src/game/LightManager.ts
import * as THREE from 'three';

export class LightManager {
    public lights: THREE.Light[];
  
    constructor() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 7.5);
      directionalLight.castShadow = true;
  
      this.lights = [ambientLight, directionalLight];
    }
}