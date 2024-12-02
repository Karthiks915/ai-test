import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosGateway } from './todos.gateway';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Todo } from './entities/todo.entity';
import { TodoRepository } from './todos.repository';

@Module({
  imports: [MikroOrmModule.forFeature([Todo])],
  providers: [TodosGateway, TodosService, TodoRepository],
})
export class TodosModule {}
