import * as THREE from 'three';

export class Enemy {
    public mesh: THREE.Mesh;
    private speed: number;
  
    constructor(position: THREE.Vector3, speed: number = 0.01) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.position.copy(position);
      this.speed = speed;
      this.mesh.castShadow = true;
    }
  
    // Função para mover o inimigo em direção a um alvo (jogador)
    public moveTowards(target: THREE.Vector3) {
      const direction = new THREE.Vector3().subVectors(target, this.mesh.position).normalize();
      this.mesh.position.add(direction.multiplyScalar(this.speed));
    }
  } 