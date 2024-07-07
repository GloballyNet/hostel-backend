import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Hostel management system')
    .setDescription(
      'The Hostel management system allows managers to monitor and allocate rooms for students.',
    )
    .setVersion('1.0')
    .addTag('hostel')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}