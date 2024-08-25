// src/game/Game.ts
import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { CameraManager } from './CameraManager';
import { LightManager } from './LightManager';
import { Floor } from './Floor';
import { Player } from './Player';
import { EnemyManager } from './EnemyManager';

export class Game {
  private sceneManager: SceneManager;
  private cameraManager: CameraManager;
  private lightManager: LightManager;
  private floor: Floor;
  private player: Player;
  private renderer: THREE.WebGLRenderer;
  private enemyManager: EnemyManager;

  constructor(container: HTMLElement) {
    // Instanciando as classes
    this.sceneManager = new SceneManager();
    this.cameraManager = new CameraManager();
    this.lightManager = new LightManager();
    this.floor = new Floor();
    this.player = new Player();

    this.enemyManager = new EnemyManager(this.sceneManager.scene, this.player.mesh.position);

    // Configurando o renderizador
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true; // Ativar sombras
    container.appendChild(this.renderer.domElement);

    // Adicionando objetos à cena
    this.sceneManager.scene.add(this.floor.mesh);
    this.sceneManager.scene.add(this.player.mesh);
    this.lightManager.lights.forEach(light => this.sceneManager.scene.add(light));

    this.enemyManager.spawnEnemy();

    // Iniciando a renderização
    this.animate();
  }

  private update() {
    this.enemyManager.updateEnemies();
    this.player.update();
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.update()
    this.renderer.render(this.sceneManager.scene, this.cameraManager.camera);
  }
}
