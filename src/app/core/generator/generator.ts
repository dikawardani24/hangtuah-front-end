export interface TitleNode {
  title: string
  children?: PersonNode[]
}

export interface PersonNode {
  nik: string
  name: string
  jabatan: string
  children?: TitleNode[]
}

export abstract class Organization<T> {
  constructor(protected generator: T) {}

  abstract getStructure(): PersonNode
}
