import { Injectable } from '@nestjs/common';
import {View} from "react-native";
import React from "react";

@Injectable()
export class AppService {
  getHello(): string {
    return `<View>

           Hello 
           
           World555566677788889999!

        </View>`;
  }
}
