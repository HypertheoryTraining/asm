import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FeaturePage } from '@app-shell/features/feature-page';

@Component({
  selector: 'app-reference-data-pages-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeaturePage],
  template: `
    <ui-feature-page pageName="About Reference Data">
      <p>Reference Data Home Page</p>
    </ui-feature-page>
  `,
  styles: ``,
})
export class HomePage {}
