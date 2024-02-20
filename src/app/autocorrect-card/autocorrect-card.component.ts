import { Component } from '@angular/core';
import { AutocorrectServiceService } from '../services/autocorrect-service.service';

@Component({
  selector: 'app-autocorrect-card',
  templateUrl: './autocorrect-card.component.html',
  styleUrls: ['./autocorrect-card.component.scss']
})
export class AutocorrectCardComponent {
  enteredWord: string = '';
  autocorrectResults: [] = [];
  showSpinner: boolean = false;

  constructor(
    private apiService: AutocorrectServiceService
  ) {}

  /**
   * This method is used to hit the api service to get the autocorrected words for the entered words
   */
  performAutocorrect(): void {
    if (this.enteredWord.length > 0) {
      this.showSpinner = true;
      this.apiService.getWordAutocorrects(this.enteredWord).subscribe((response: any) => {
        this.showSpinner = false;
        this.autocorrectResults = response.result.split(',')
      });
    }
    else {
      this.autocorrectResults = [];
    }
  }

  onKeyUp(event: any): void {
    this.enteredWord = event.target.value;
  }
}
