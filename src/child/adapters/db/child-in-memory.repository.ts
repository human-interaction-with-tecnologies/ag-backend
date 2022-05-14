import { Injectable } from '@nestjs/common';
import { Child } from 'src/child/domain/model/child.model';
import { ChildRepository } from 'src/child/domain/ports/child.repository';

@Injectable()
export class ChildInMemory implements ChildRepository {
  private readonly children: Child[] = [];

  create(child: Child): Promise<Child> {
    this.children.push(child);
    return new Promise(resolve => resolve(child));
  }

  findAll(): Promise<Child[]> {
    return new Promise(resolve => resolve(this.children));
  }

  findById(id: string): Promise<Child> {
    return new Promise(resolve => resolve(this.children.find(c => c.id === id)));
  }

  update(id: string, child: Child): Promise<Child> {
    const index = this.children.findIndex(c => c.id === id);
    this.children[index] = child;
    return new Promise(resolve => resolve(child));
  }

  delete(id: string): Promise<Child> {
    const index = this.children.findIndex(c => c.id === id);
    const child = this.children[index];
    this.children.splice(index, 1);
    return new Promise(resolve => resolve(child));
  }
}