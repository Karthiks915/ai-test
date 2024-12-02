import { EntityManager } from '@mikro-orm/core';
import { Todo } from '../todos/entities/todo.entity';

export async function seedDatabase(em: EntityManager) {
  const todos = [
    { title: 'Complete NestJS setup', completed: false },
    { title: 'Learn MikroORM', completed: false },
    { title: 'Build REST API', completed: false },
    { title: 'Write tests', completed: false },
    { title: 'Deploy application', completed: false },
  ];

  const entities = todos.map((todo) => em.create(Todo, todo));
  await em.persistAndFlush(entities);
}
