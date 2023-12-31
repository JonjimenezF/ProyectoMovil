import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { LUsuario } from '../models/lUsuario';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

  userList: LUsuario[]= [
    new LUsuario('12.123.321-k','pablo','perez','pa.perez@gmail.com','alumno','123'),
    new LUsuario('12.123.321-k','pablo','perez','jop.perez@gmail.com','alumno','123'),
  ];

  user={
    usuario: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.userList);
    
  }

  actualizarContrasena(newPassword: string){//actualizarContrasena(usuario: string, newPassword: string)
    for(let i = 0; i < this.userList.length; i++){ 
      console.log(newPassword); 
       
      // if(this.userList[i].email === usuario){
      //   console.log(this.userList[i]);   
      //   this.userList[i].password = newPassword;   
      //   console.log(this.userList[i]);  
        
      //   break;
      // }
         
    }
  }



  

}
