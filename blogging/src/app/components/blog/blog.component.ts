import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
    noticia : INoticia ={
      title : '',
      url: '',
      textArea : '',
      date : ''
    }
    blog : Array<INoticia> = [];

    cargarNoticia():void{
      if(this.noticia.title !=='' && this.noticia.url !=='' &&
         this.noticia.textArea !=='' && this.noticia.date !==''){
        this.blog.push({...this.noticia});
        Object.keys(this.noticia).forEach(key => {
          this.noticia[key as keyof INoticia] = '';
        })
        ;
        }
    }

    pintarNoticias(){
      let html = '';

      return html;
    }
}
