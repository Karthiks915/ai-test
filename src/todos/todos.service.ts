import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Todo } from './entities/todo.entity';
import { TodoRespository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: TodoRespository,
  ) {}

  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.createTodo(createTodoDto);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.getAllTodos();
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoRepository.updateTodo(id, updateTodoDto);
  }

  remove(id: number): Promise<void> {
    return this.todoRepository.removeTodo(id);
  }
}
