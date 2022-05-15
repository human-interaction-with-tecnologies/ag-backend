import { Inject } from "@nestjs/common";
import { Professional } from "../model/professional.model";
import { ProfessionalRepository } from "./professional.repository";

export class ProfessionalService {
  constructor(
    @Inject(ProfessionalRepository) private readonly ProfessionalRepository: ProfessionalRepository,
  ) { }

  async create(professional: Professional): Promise<Professional> {
    return this.ProfessionalRepository.create(professional);
  }

  async findAll(): Promise<Professional[]> {
    return this.ProfessionalRepository.findAll();
  }

  async findById(id: string): Promise<Professional> {
    return this.ProfessionalRepository.findById(id);
  }

  async update(id: string, professional: Professional): Promise<Professional> {
    return this.ProfessionalRepository.update(id, professional);
  }

  async delete(id: string): Promise<Professional> {
    return this.ProfessionalRepository.delete(id);
  }
}
