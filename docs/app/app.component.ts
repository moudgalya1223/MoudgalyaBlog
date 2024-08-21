import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ MWComponent } from '../app/mw/mw.component'
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [RouterOutlet, MWComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MoudgalyaBlog';
}
