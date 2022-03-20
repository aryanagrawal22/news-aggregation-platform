import { Migration } from '@mikro-orm/migrations';

export class Migration20220320073038 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "username" text not null, "password" text not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');

    this.addSql('create table "post" ("id" serial primary key, "title" text not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');

    this.addSql('drop table if exists "post" cascade;');
  }

}
