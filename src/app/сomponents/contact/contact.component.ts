import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  nameIsError: boolean = false;
  nameIsValid: boolean = false;
  email: string = '';
  emailIsError: boolean = false;
  emailIsValid: boolean = false;
  tel: string = '';
  telIsError: boolean = false;
  telIsValid: boolean = false;
  text: string = '';
  textIsError: boolean = false;
  textIsValid: boolean = false;


  submitForm = (event: Event) => {
    event.preventDefault();

    if (!this.name || !this.email || !this.tel || !this.text) {
      return;
    }

    alert(`
      Your message is:
      name: ${this.name}
      e-mail: ${this.email}
      phone: ${this.tel}
      comment" ${this.text}
    `)

    this.name = '';
    this.email = '';
    this.tel = '';
    this.text = '';
  }

  changeValue = (event: Event) => {
    const target = event.target as HTMLInputElement;

    switch (target.name) {
      case 'name':
        this.name = target.value.trim();
      break;

      case 'email':
        this.email = target.value.trim();
      break;

      case 'tel':
        this.tel = target.value.trim();
      break;

      case 'text':
        this.text = target.value.trim();
      break;

      default:
        break;
    }
  }

  check = (event: Event) => {
    const target = event.target as HTMLInputElement;

    switch (target.name) {
      case 'name':
        if (!target.value.trim()) {
          this.nameIsError = true;
        }
      break;

      case 'email':
        if (!target.value.trim()) {
          this.emailIsError = true;
        }
      break;

      case 'tel':
        if (!target.value.trim()) {
          this.telIsError = true;
        }
      break;

      case 'text':
        if (!target.value.trim()) {
          this.textIsError = true;
        }
      break;

      default:
        break;
    }
  }
}
