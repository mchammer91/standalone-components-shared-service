import { Component } from '@angular/core';
import { GuidService } from './services/guid.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  template: `<p>Child 1 GUID: {{ guid }}</p>`,
  // providers: [GuidService]
})
export class Child1Component {
  guid: string;

  constructor(private guidService: GuidService) {
    this.guid = this.guidService.guid;
  }
}
