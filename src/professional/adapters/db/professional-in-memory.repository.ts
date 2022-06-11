import { Injectable } from '@nestjs/common';
import { Professional } from 'src/professional/domain/model/professional.model';
import { ProfessionalRepository } from 'src/professional/domain/ports/professional.repository';

@Injectable()
export class ProfessionalInMemory implements ProfessionalRepository {
  private readonly professionals: Professional[] = [];

  create(professional: Professional): Promise<Professional> {
    this.professionals.push(professional);
    return new Promise((resolve) => resolve(professional));
  }

  findAll(): Promise<Professional[]> {
    return new Promise((resolve) => resolve(this.professionals));
  }

  findById(id: string): Promise<Professional> {
    return new Promise((resolve) =>
      resolve(this.professionals.find((p) => p.id === id)),
    );
  }

  update(id: string, professional: Professional): Promise<Professional> {
    const index = this.professionals.findIndex((p) => p.id === id);
    this.professionals[index] = professional;
    return new Promise((resolve) => resolve(professional));
  }

  delete(id: string): Promise<Professional> {
    const index = this.professionals.findIndex((p) => p.id === id);
    const professional = this.professionals[index];
    this.professionals.splice(index, 1);
    return new Promise((resolve) => resolve(professional));
  }
}
