import { ProfessionalEntity } from '@/domain/entities';

export interface ProfessionalRepository {
  create(professional: ProfessionalEntity): Promise<ProfessionalEntity>;

  findOne(email: string): Promise<ProfessionalEntity>;

  findAll(): Promise<ProfessionalEntity[]>;

  update(
    id: string,
    professional: ProfessionalEntity,
  ): Promise<ProfessionalEntity>;

  delete(id: string): Promise<ProfessionalEntity>;
}
