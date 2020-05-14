import { CepService } from './../../cep.service';
import { Cep } from './../../cep.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  cep: Cep

  constructor(private cepServise: CepService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')
    this.cepServise.buscaPorCep(id).subscribe(cep => {
      this.cep = cep
    })
  }

  volta(): void{
    this.router.navigate(['/'])
  }

}
