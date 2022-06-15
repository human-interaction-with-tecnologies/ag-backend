import { Professional } from '@/domain/model';

export interface ProfessionalUseCase {
  create(professional: Professional): Promise<Professional>;

  findOne(email: string): Promise<Professional>;

  findAll(): Promise<Professional[]>;

  update(id: string, professional: Professional): Promise<Professional>;

  delete(id: string): Promise<Professional>;
}

export const ProfessionalUseCase = Symbol('ProfessionalUseCase');
