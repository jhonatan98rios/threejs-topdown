// src/game/PlayerController.ts
import * as THREE from 'three';

export class PlayerController {
  private playerMesh: THREE.Mesh;
  private movementSpeed: number;
  private keysPressed: { [key: string]: boolean };

  constructor(playerMesh: THREE.Mesh, movementSpeed: number = 0.05) {
    this.playerMesh = playerMesh;
    this.movementSpeed = movementSpeed;
    this.keysPressed = {};

    this.addEventListeners();
  }

  // Função para adicionar listeners de teclado
  private addEventListeners() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  private onKeyDown = (event: KeyboardEvent) => {
    this.keysPressed[event.key] = true;
  };

  private onKeyUp = (event: KeyboardEvent) => {
    this.keysPressed[event.key] = false;
  };

  // Função para atualizar a posição do jogador com base nas teclas pressionadas
  public update() {
    const direction = new THREE.Vector3();

    if (this.keysPressed['w'] || this.keysPressed['ArrowUp']) {
      direction.z -= 1;
    }
    if (this.keysPressed['s'] || this.keysPressed['ArrowDown']) {
      direction.z += 1;
    }
    if (this.keysPressed['a'] || this.keysPressed['ArrowLeft']) {
      direction.x -= 1;
    }
    if (this.keysPressed['d'] || this.keysPressed['ArrowRight']) {
      direction.x += 1;
    }

    direction.normalize().multiplyScalar(this.movementSpeed);
    this.playerMesh.position.add(direction);
  }

  // Função para remover os event listeners (caso precise desmontar o controle)
  public dispose() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }
}
