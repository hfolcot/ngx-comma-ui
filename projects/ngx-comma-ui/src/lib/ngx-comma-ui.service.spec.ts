import { TestBed } from '@angular/core/testing';

import { NgxCommaUiService } from './ngx-comma-ui.service';

describe('NgxCommaUiService', () => {
  let service: NgxCommaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCommaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
