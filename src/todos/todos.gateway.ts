import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@WebSocketGateway()
export class TodosGateway {
  constructor(private readonly todosService: TodosService) {}

  @SubscribeMessage('createTodo')
  create(@MessageBody() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @SubscribeMessage('findAllTodos')
  findAll() {
    return this.todosService.findAll();
  }

  @SubscribeMessage('updateTodo')
  update(@MessageBody() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(updateTodoDto.id, updateTodoDto);
  }

  @SubscribeMessage('removeTodo')
  remove(@MessageBody() id: number) {
    return this.todosService.remove(id);
  }
}
