import { Cep } from './../../cep.model';
import { CepService } from './../../cep.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'frontend';
  id: string

  constructor(private router: Router, private cepServise: CepService) { }

  ngOnInit(): void {
  }

  navigateToBusca(): void {
     this.router.navigate(['/busca/'+this.id])
    
  }

}
