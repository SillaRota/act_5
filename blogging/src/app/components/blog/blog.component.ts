import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-blog',
  imports: [FormsModule,],
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
    blog : Array<INoticia> = [
      {
        title: "La tarta de la madre de Cris: 'Dominaremos el mundo'",
        url: 'evil-cheese-cake.png',
        textArea: 'Quien digo que las elites dominaban el mundo porque ahora una simple pero deliciosa tarta de queso tiene al mundo bajo sus pies.',
        date: '2025-07-12'
      },
      {
        title: 'Algas como sombrero: NUEVA MODA',
        url: 'alga-sombrero.png',
        textArea: 'No permitas que el calentamiento global te queme los pensamientos. Con esta nueva moda te refrescas y eres ecológica.',
        date: '2025-07-10'
      }
    ];
    cargarNoticia():void{
      if(this.noticia.title !=='' && this.noticia.url !=='' &&
         this.noticia.textArea !=='' && this.noticia.date !==''){
        this.blog.push({...this.noticia});
        Object.keys(this.noticia).forEach(key => {
          this.noticia[key as keyof INoticia] = '';
        })
        ;
        } else {
          alert("No has introducido todo correctamente");
        }
    }

    pintarNoticias(){
      let html = '';

      this.blog.forEach(notice => {
        html = html + 
        `<div class="news-card">
          <div class="news-card__wrapper">
            <img src="${notice.url}" alt="" class="wrapper_img">
          </div>
          <div class="news-card__body">
            <h4 class="news-card__title">${notice.title}</h4>
            <p class="news-card__text justify">${notice.textArea}</p>
          <span class="news-card__date left">${notice.date}</span>
          </div>
        </div>`; 
        }
      );
      return html;
    }
}
