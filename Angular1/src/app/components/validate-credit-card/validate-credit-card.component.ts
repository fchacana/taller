import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-credit-card',
  templateUrl: './validate-credit-card.component.html',
  styleUrls: ['./validate-credit-card.component.css']
})
export class ValidateCreditCardComponent {


  cardNumber: string = '';

  submit() {
    if (this.validateCardNumber()) {
      alert('La tarjeta es válida!');
    } else {
      alert('La tarjeta no es válida!');
    }
  }

  validateCardNumber() {
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return regex.test(this.cardNumber);
  }

}
