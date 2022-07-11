import * as axios from 'axios';

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './common/config/config.service';

@Controller()
export class AppController
{

  constructor(private readonly appService: AppService) {}
  
  @Get()
  hello()
  {
    return "Hello World!"
  }
  
  //#region Training

  @Get('train')
  async  getTrainVersion() {
    const res = await axios.default({
      method: 'get',
      url: ConfigService.training().url,
    });
    return res.data;
  }
    
    //#endregion
    
    //#region Classification

    @Get('classification')
    async  getClassificationVersion() {
      const res = await axios.default({
        method: 'get',
        url: ConfigService.classification().url,
      });
      return res.data;
    }

    @Get('classification/description')
    async  getClassificationModelDescription() {
      const res = await axios.default({
        method: 'get',
        url: ConfigService.classification().url + '/description',
      });
      return res.data;
    }

    @Post('classification/predict')
    async  getPrediction(@Body() payload: {base64: string}) {
      const res = await axios.default({
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        url: ConfigService.classification().url + '/predict',
        data: payload
      });
      return res.data;
    }

    //#endregion

}
