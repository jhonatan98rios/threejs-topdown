// src/game/EnemyManager.ts
import * as THREE from 'three';
import { Enemy } from './Enemy';

export class EnemyManager {
  private scene: THREE.Scene;
  private enemies: Enemy[] = [];
  private playerPosition: THREE.Vector3;

  constructor(scene: THREE.Scene, playerPosition: THREE.Vector3) {
    this.scene = scene;
    this.playerPosition = playerPosition;
  }

  // Função para spawnar um novo inimigo na frente do jogador
  public spawnEnemy() {
    const spawnPosition = new THREE.Vector3(
      this.playerPosition.x,
      this.playerPosition.y,
      this.playerPosition.z - 5 // Ajuste para spawnar na frente do jogador
    );
    const enemy = new Enemy(spawnPosition);
    this.enemies.push(enemy);
    this.scene.add(enemy.mesh);
  }

  // Função para atualizar todos os inimigos
  public updateEnemies() {
    this.enemies.forEach(enemy => {
      enemy.moveTowards(this.playerPosition);
    });
  }
}
