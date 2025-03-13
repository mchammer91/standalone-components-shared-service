import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuidService } from './services/guid.service';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child1Component, Child2Component],
  // providers: [GuidService],
  template: `
    AppComponent GUID: {{ guid}}
    <app-child1></app-child1>
    <app-child2></app-child2>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standalone-components-shared-service';
  guid: string;

  constructor(private guidService: GuidService) {
    this.guid = this.guidService.guid;
  }
}
