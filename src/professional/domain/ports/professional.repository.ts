import { Professional } from '../model/professional.model';

export interface ProfessionalRepository {
  create(professional: Professional): Promise<Professional>;

  findAll(): Promise<Professional[]>;

  findById(id: string): Promise<Professional>;

  findByUsername(id: string): Promise<Professional>;

  update(id: string, professional: Professional): Promise<Professional>;

  delete(id: string): Promise<Professional>;
}

export const ProfessionalRepository = Symbol('ProfessionalRepository');
