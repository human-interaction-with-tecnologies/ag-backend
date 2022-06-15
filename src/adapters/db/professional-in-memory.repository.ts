import { Injectable } from '@nestjs/common';
import { ProfessionalEntity } from '@/domain/entities/professional.entity';
import { ProfessionalRepository } from '@/domain/ports/professional.repository';

@Injectable()
export class ProfessionalInMemory implements ProfessionalRepository {
  private readonly professionals: ProfessionalEntity[] = [];

  create(professional: ProfessionalEntity): Promise<ProfessionalEntity> {
    this.professionals.push(professional);
    return new Promise((resolve) => resolve(professional));
  }

  findOne(email: string): Promise<ProfessionalEntity> {
    const professional = this.professionals.find((p) => p.email === email);
    return new Promise((resolve) => resolve(professional));
  }

  findAll(): Promise<ProfessionalEntity[]> {
    return new Promise((resolve) => resolve(this.professionals));
  }

  update(
    id: string,
    professional: ProfessionalEntity,
  ): Promise<ProfessionalEntity> {
    const index = this.professionals.findIndex((p) => p.id === id);
    this.professionals[index] = professional;
    return new Promise((resolve) => resolve(professional));
  }

  delete(id: string): Promise<ProfessionalEntity> {
    const index = this.professionals.findIndex((p) => p.id === id);
    const professional = this.professionals[index];
    this.professionals.splice(index, 1);
    return new Promise((resolve) => resolve(professional));
  }
}
