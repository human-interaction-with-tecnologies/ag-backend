import { Injectable } from '@nestjs/common';
import { Child } from 'src/child/domain/model/child.model';
import { ChildService } from 'src/child/domain/ports/child.service';
import { ChildDto } from './child.dto';

@Injectable()
export class ChildApiService {
  constructor(private childService: ChildService) { }

  create({ name, age, institution, note }: ChildDto): Promise<Child> {
    return this.childService.create(
      new Child(name, age, institution, note)
    );
  }

  findAll(): Promise<Child[]> {
    return this.childService.findAll();
  }

  findById(id: string): Promise<Child> {
    return this.childService.findById(id);
  }

  update(id: string, { name, age, institution, note }: ChildDto): Promise<Child> {
    return this.childService.update(
      id,
      new Child(name, age, institution, note)
    );
  }

  delete(id: string): Promise<Child> {
    return this.childService.delete(id);
  }
}