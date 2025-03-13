import { Component } from '@angular/core';
import { GuidService } from './services/guid.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  template: `<p>Child 2 GUID: {{ guid }}</p>`,
  // providers: [GuidService]
})
export class Child2Component {
  guid: string;

  constructor(private guidService: GuidService) {
    this.guid = this.guidService.guid;
  }
}
