import { defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Todo } from './src/todos/entities/todo.entity';

export default defineConfig({
  dbName: 'ai_test',
  host: 'localhost',
  port: 5432,
  user: 'what',
  password: 'defonotpassword',
  entities: [Todo],
  allowGlobalContext: true,
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
});
