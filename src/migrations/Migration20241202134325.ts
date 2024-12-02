import { Migration } from '@mikro-orm/migrations';

export class Migration20241202134325 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "todo" ("id" uuid not null default gen_random_uuid(), "title" varchar(255) not null, "completed" boolean not null default false, constraint "todo_pkey" primary key ("id"));`,
    );
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "todo" cascade;`);
  }
}
