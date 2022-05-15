import { Inject, Injectable } from "@nestjs/common";
import { ChildDto } from "src/child/adapters/api/child.dto";
import { Child } from '../model/child.model';
import { ChildRepository } from './child.repository';

export class ChildService {
  constructor(
    @Inject(ChildRepository) private readonly ChildRepository: ChildRepository,
  ) { }

  async create(child: Child): Promise<Child> {
    return this.ChildRepository.create(child);
  }

  async findAll(): Promise<Child[]> {
    return this.ChildRepository.findAll();
  }

  async findById(id: string): Promise<Child> {
    return this.ChildRepository.findById(id);
  }

  async update(id: string, child: Child): Promise<Child> {
    return this.ChildRepository.update(id, child);
  }

  async delete(id: string): Promise<Child> {
    return this.ChildRepository.delete(id);
  }
}
