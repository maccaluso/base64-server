import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { encode } from 'node-base64-image';

@Controller()
export class AppController {
  private options = {
    string: true,
    headers: {
      'User-Agent': 'base64-server',
    },
  };

  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    return this.appService.getHello();
  }

  @Post()
  async returnBase64FromUrl(
    @Body() body: { url: string; imageType: string },
  ): Promise<{ base64Image: string }> {
    const image = await encode(body.url, this.options);
    return { base64Image: `data:image/${body.imageType};base64,` + image };
    // return { base64Image: image as string };
  }
}
