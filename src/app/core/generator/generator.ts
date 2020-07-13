export interface PersonNode {
  nik: string
  name: string
  designation: string
  subordinates?: PersonNode[],
  imageUrl: string,
  cssClass: string
}

export abstract class Organization<T> {
  constructor(protected generator: T) {}

  abstract getStructure(): PersonNode
}
