import { Injectable } from "@angular/core";

@Injectable()
export class AboutService{

    info = {
        nom:"Ferhat",
        email: "ferhat@gmail.com",
        tel: 654321112
      }
    
      comments = [
        {date:new Date(), message:"A"},
        {date:new Date(), message:"B"},
        {date:new Date(), message:"C"}
      ]

      addComment(c:any){
          this.comments.push(c);
      }
    
      getAllComments(){
          return this.comments;
      }

      getInfo(){
          return this.info;
      }
}