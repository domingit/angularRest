import { Component } from '@angular/core';
import { ERROR_CONSTANTS } from './error.config';

@Component({
  standalone: true,
  imports: [],
  template: `
    <div class="content-error" id="id_not_found">{{LABELS.NOT_FOUND_PAGE}}</div>
`
})
export class NotFoundComponent {
  public readonly LABELS = ERROR_CONSTANTS.LABELS;
}
