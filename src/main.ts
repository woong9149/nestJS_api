import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //데코레이터에 없는 파라미터를 거르고, 정상적인 파라미터들만 받는 옵션
      forbidNonWhitelisted: true, //허용되지 않은 파라미터가 있으면 리퀘스트 자체를 막는 옵션 -> HttpException 예외를 던진다.
      transform: true, //받고자 하는 데이터타입으로 자동 변환 해주는 옵션
    })
  );
  await app.listen(3000);
}
bootstrap();
