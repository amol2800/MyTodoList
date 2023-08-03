import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoSer1Service {
 public url="http://localhost:3000/data/";
  constructor(private api:HttpClient) { }
   
  // send data to backend
  forPostData(data:any){
   return this.api.post(this.url,data)  
  }

// getting data from backend
  forGetData(){
    return this.api.get(this.url)
  }

  // for deleting data
  forDeleteData(id:any){
    return this.api.delete(this.url+id)
  }

  // for updating data
  forUpdate(id:any,data:any){
    return this.api.put(this.url+id,data);
  }


  // For fetch data One comp to another comp..
  private forUpdata =new BehaviorSubject('');
      forEdit=this.forUpdata.asObservable()

      setData(data:any){
        this.forUpdata.next(data);
      }

      getData(){
        return this.forEdit;
      }
}
