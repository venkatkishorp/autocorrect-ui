import { TestBed } from '@angular/core/testing';

import { AutocorrectServiceService } from './autocorrect-service.service';

describe('AutocorrectServiceService', () => {
  let service: AutocorrectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocorrectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
