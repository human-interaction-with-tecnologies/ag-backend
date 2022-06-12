import { Inject } from '@nestjs/common';
import { Professional } from '@/domain/model';
import { ProfessionalRepository } from '@/domain/ports';

export class ProfessionalService {
  constructor(
    @Inject(ProfessionalRepository)
    private readonly professionalRepository: ProfessionalRepository,
  ) {}

  async create(professional: Professional): Promise<Professional> {
    return this.professionalRepository.create(professional);
  }

  async findAll(): Promise<Professional[]> {
    return this.professionalRepository.findAll();
  }

  async update(id: string, professional: Professional): Promise<Professional> {
    return this.professionalRepository.update(id, professional);
  }

  async delete(id: string): Promise<Professional> {
    return this.professionalRepository.delete(id);
  }
}
