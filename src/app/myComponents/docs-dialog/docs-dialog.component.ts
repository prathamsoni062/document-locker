import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-docs-dialog',
  standalone: false,
  
  templateUrl: './docs-dialog.component.html',
  styleUrl: './docs-dialog.component.scss'
})
export class DocsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { animal: string }) {}

}
