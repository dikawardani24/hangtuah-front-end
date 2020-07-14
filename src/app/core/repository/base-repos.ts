export interface Repository<ID, T> {
  findById(id: ID): T
  getAll(): T[]
  save(model: T): T
  edit(model: T)
  delete(model: T)
}
