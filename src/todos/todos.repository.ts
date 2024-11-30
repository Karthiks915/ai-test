import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { EntityRepository } from '@mikro-orm/core';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoRespository extends EntityRepository<Todo> {
  async getAllTodos(): Promise<Todo[]> {
    return await this.findAll();
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.create(createTodoDto);
    await this.em.persist(todo).flush();
    return todo;
  }

  async updateTodo(
    id: number,
    updateTodoDto: Partial<CreateTodoDto>,
  ): Promise<Todo> {
    const todo = await this.findOne(id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    this.em.assign(todo, updateTodoDto);
    await this.em.flush();
    return todo;
  }

  async removeTodo(id: number): Promise<void> {
    const todo = await this.findOne(id);
    if (!todo) {
      throw new Error('Todo not found');
    }

    this.em.remove(todo).flush();
  }
}
