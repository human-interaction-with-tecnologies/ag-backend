import { Injectable } from '@nestjs/common';
import { Professional } from 'src/professional/domain/model/professional.model';
import { ProfessionalService } from 'src/professional/domain/ports/professional.service';
import { ProfessionalDto } from './professional.dto';

@Injectable()
export class ProfessionalApiService {
  constructor(private professionalService: ProfessionalService) { }

  create({ username, name, email, password, position, institution }: ProfessionalDto): Promise<Professional> {
    return this.professionalService.create(
      new Professional(username, name, email, password, position, institution)
    );
  }

  findAll(): Promise<Professional[]> {
    return this.professionalService.findAll();
  }

  findById(id: string): Promise<Professional> {
    return this.professionalService.findById(id);
  }

  update(id: string, { username, name, email, password, position, institution }: ProfessionalDto): Promise<Professional> {
    return this.professionalService.update(
      id,
      new Professional(username, name, email, password, position, institution)
    );
  }

  delete(id: string): Promise<Professional> {
    return this.professionalService.delete(id);
  }
}