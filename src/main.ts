import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Sandbox API')
    .setDescription('API para testes com Kubernetes, CI/CD e integrações')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port: number = Number(process.env.PORT) || 3000;
  const env: string = process.env.NODE_ENV ?? 'development';
  await app.listen(port);
  console.log(
    `🚀 Sandbox API rodando em http://localhost:${port}/api (env: ${env})`
  );
  console.log(
    `📚 Swagger disponível em http://localhost:${port}/api/docs`
  );
}
bootstrap();
