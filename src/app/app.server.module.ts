import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    CommonModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
