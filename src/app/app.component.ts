import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import *  as  header  from '../../assets/en-ca.json'
import { MWComponent } from '../app/mw/mw.component';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MWComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ensure correct property name for styles
})
export class AppComponent implements OnInit{
 
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 // title = 'MoudgalyaBlog';
  para=JSON.stringify(header.title.para2);
  title1 = JSON.stringify(header.title.Para1); 
  constructor(private router: Router) {
    
  }
  ngOnInit(){
    console.log("val",this.para)
   
  }
}
