import { Component, OnInit } from '@angular/core';
import { Carreras } from '../carreras';
import { CarrerasService } from '../carreras.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  id!: number;
  carreras!: Carreras;

  constructor(
    public carrerasService: CarrerasService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['carreraId'];
        
    this.carrerasService.find(this.id).subscribe((data: Carreras)=>{
      this.carreras = data;
    });
  }

}
