import { ProfessionalEntity } from '@/domain/entities';
import { ProfessionalRepository } from '@/domain/ports';
import { ProfessionalUseCase } from '@/domain/ports/professional.usecase';

export class ProfessionalService implements ProfessionalUseCase {
  constructor(
    private readonly professionalRepository: ProfessionalRepository,
  ) {}

  async create(professional: ProfessionalEntity): Promise<ProfessionalEntity> {
    return this.professionalRepository.create(professional);
  }

  async findOne(id: string): Promise<ProfessionalEntity> {
    return this.professionalRepository.findOne(id);
  }

  async findAll(): Promise<ProfessionalEntity[]> {
    return this.professionalRepository.findAll();
  }

  async update(
    id: string,
    professional: ProfessionalEntity,
  ): Promise<ProfessionalEntity> {
    return this.professionalRepository.update(id, professional);
  }

  async delete(id: string): Promise<ProfessionalEntity> {
    return this.professionalRepository.delete(id);
  }
}
