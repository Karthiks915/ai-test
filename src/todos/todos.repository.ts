import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/core';

@Injectable()
export class TodoRepository {
  private readonly repository: EntityRepository<Todo>;

  constructor(private readonly em: EntityManager) {
    this.repository = em.getRepository(Todo);
  }

  async getAllTodos(): Promise<Todo[]> {
    return this.repository.findAll();
  }

  async createTodo(createTodoDto: any): Promise<Todo> {
    const todo = this.repository.create(createTodoDto);
    await this.em.persistAndFlush(todo);
    return todo;
  }

  async updateTodo(id: string, updateTodoDto: any): Promise<Todo> {
    // Change from number to string
    const todo = await this.repository.findOne(id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    this.em.assign(todo, updateTodoDto);
    await this.em.flush();
    return todo;
  }

  async removeTodo(id: string): Promise<void> {
    // Change from number to string
    const todo = await this.repository.findOne(id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    await this.em.removeAndFlush(todo);
  }
}
