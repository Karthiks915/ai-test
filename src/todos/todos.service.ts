import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todos.repository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.createTodo(createTodoDto);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.getAllTodos();
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    // Change from number to string
    return this.todoRepository.updateTodo(id, updateTodoDto);
  }

  remove(id: string): Promise<void> {
    // Change from number to string
    return this.todoRepository.removeTodo(id);
  }
}
