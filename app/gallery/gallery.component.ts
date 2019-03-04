import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos:any;
  currentPage:number = 1;
  size:number = 10;
  pages:Array<number>;
  totalPages:number;
  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSearch(dataForm){
    this.http.get("https://pixabay.com/api/?key=11761907-c80f252e8ee812051273bdb35&q="+
                  dataForm.motCle+"&per_page="+ this.size +"&page="+ this.currentPage)
             .map(resp=>resp.json())
             .subscribe(data=>{
               console.log(data);
              this.pagePhotos = data;
              this.totalPages = data.totalHits/this.size;
              if(data.totalHits % this.size != 0) ++this.totalPages;
              this.pages = new Array(this.totalPages);
             })

  }

}
