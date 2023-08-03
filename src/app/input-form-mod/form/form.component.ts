import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoSer1Service } from 'src/app/Service File/todo-ser1.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public myform:any;

  constructor(private fb:FormBuilder,private http:TodoSer1Service){
    this.myform=this.fb.group({
      taskname:[''],
      status:[''],
      
    })

    this.fetchdata()
}

submitfun(){
  this.http.forPostData(this.myform.value).subscribe((res:any)=>{console.log(res);
  })
}

public id:any;
fetchdata(){
  this.http.getData().subscribe((res:any)=>{
    this.id =res.id
    this.myform.patchValue({
      taskname:res.taskname,
      status:res.status
    })
    
  })
}

updataData(){
  this.http.forUpdate(this.id,this.myform.value).subscribe(res=>console.log(res))
}

}