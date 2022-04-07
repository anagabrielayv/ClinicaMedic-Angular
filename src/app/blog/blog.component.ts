import { Component, OnInit } from '@angular/core';
import { DataBlog } from '../entities/DataBlog';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listaDatoBlog : DataBlog[];

  constructor( private DatoBlogService: DatosService) { }

  ngOnInit(): void {

    this.DatoBlogService.DatosBlog().subscribe(
      (res: DataBlog[]) => {
        this.listaDatoBlog = res;
        console.log(res);
      }
    )

  }

}
