import type { WithId, Document } from 'mongodb'

export interface IDocument extends WithId<Document> {}
