import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocsDialogComponent } from '../docs-dialog/docs-dialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
constructor(private dialog: MatDialog){
}

cards = [
  {
    title: 'Aadhaar',
    description: 'Unique identification card issued by the government.'
  },
  {
    title: 'PAN',
    description: 'Permanent Account Number for tax identification.'
  },
  {
    title: 'Voter ID',
    description: 'Identity card for voting purposes.'
  },
  {
    title: 'Driving License',
    description: 'Document permitting you to drive vehicles.'
  }
];



openDialog(card: any) {
  this.dialog.open(DocsDialogComponent, {
    width: '400px', // Adjust the width as needed
    data: {
      documentType: card.title, // Pass the card's title to the dialog
      description: card.description
    }
  });
}
}
