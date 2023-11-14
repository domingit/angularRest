import { Component } from '@angular/core';
import { ERROR_CONSTANTS } from './error.config';

@Component({
  standalone: true,
  imports: [],
  template: `
    <div class="content-error" id="id_error_page">{{LABELS.ERROR_PAGE}}</div>
`
})
export class ErrorPageComponent {
  public readonly LABELS = ERROR_CONSTANTS.LABELS;
}
