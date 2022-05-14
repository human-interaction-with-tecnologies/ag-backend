import { Child } from "../model/child.model";

export interface ChildRepository {
  create(child: Child): Promise<Child>;

  findAll(): Promise<Child[]>;

  findById(id: string): Promise<Child>;

  update(id: string, child: Child): Promise<Child>;

  delete(id: string): Promise<Child>;
}

export const ChildRepository = Symbol('ChildRepository');