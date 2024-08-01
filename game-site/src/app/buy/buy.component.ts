import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})

export class BuyComponent{
  purchaseForm: FormGroup;
  selectedEdition: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedEdition = params['edition'] || '';
    });
  }

  createForm() {
    this.purchaseForm = this.fb.group({
      playerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      edition: ['', Validators.required],
      creditCard: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
    });
  }

  onSubmit() {
    if (this.purchaseForm.valid) {
      console.log('Form submitted:', this.purchaseForm.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  get selectedEditionLabel(): string {
    switch (this.selectedEdition) {
        case 'Street Fighter II':
            return 'Total: 20$';
        case 'Street Fighter II Turbo':
            return 'Total: 40$';
        case 'Super Street Fighter II':
            return 'Total: 60$';
    }
    return '';
  }
}