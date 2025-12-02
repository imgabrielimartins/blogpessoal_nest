import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '95095100',
      database: 'db_blogpessoal',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PostagemModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
