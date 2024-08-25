// src/game/Player.ts
import * as THREE from 'three';
import { PlayerController } from './PlayerController';

export class Player {
  public mesh: THREE.Mesh;
  private controller: PlayerController;

  constructor() {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = 0.5; // Levanta o player para ficar sobre o piso
    this.mesh.castShadow = true;

    // Instanciando o controlador de jogador
    this.controller = new PlayerController(this.mesh);
  }

  // Método para atualizar o controlador de jogador
  public update() {
    this.controller.update();
  }
}