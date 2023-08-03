import { Component } from '@angular/core';
import { TodoSer1Service } from 'src/app/Service File/todo-ser1.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent {
  public GetFormData:any;

  constructor(private http:TodoSer1Service){
    this.getData()

  }
// getting data from local JSON
  getData(){
    this.http.forGetData().subscribe((res)=>{
      this.GetFormData=res;
      console.log(res);
      
    })
  }

  // Delete the from local JSON
  deleteData(data:any){
    this.http.forDeleteData(data.id).subscribe((res:any)=>{console.log(res);
    })
    this.getData();
  }

  // the perticular data send to service file.
  editData(data:any){
    this.http.setData(data)
  }

}
