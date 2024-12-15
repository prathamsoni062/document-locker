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

openDialog() {
  this.dialog.open(DocsDialogComponent, {
    width: '400px', // Adjust the width as needed
    data: {
      animal: 'panda',
    },
  });
}
}
