import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class TodosGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly todosService: TodosService) {}

  @SubscribeMessage('createTodo')
  async create(@MessageBody() createTodoDto: CreateTodoDto) {
    const todo = await this.todosService.create(createTodoDto);
    this.server.emit('todoCreated', todo);
    return todo;
  }

  @SubscribeMessage('findAllTodos')
  async findAll() {
    const todos = await this.todosService.findAll();
    this.server.emit('todos', todos);
    return todos;
  }

  @SubscribeMessage('updateTodo')
  async update(@MessageBody() updateTodoDto: UpdateTodoDto) {
    const todo = await this.todosService.update(
      updateTodoDto.id,
      updateTodoDto,
    );
    this.server.emit('todoUpdated', todo);
    return todo;
  }

  @SubscribeMessage('removeTodo')
  async remove(@MessageBody() id: string) {
    await this.todosService.remove(id);
    this.server.emit('todoRemoved', id);
  }
}
