import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = "TOP 5 CARS";
  hiddenText = false;
  mycards = ['thing1', 'thing2', 'thing3,'];
  

  car1 = {
    name: "NSX",
    brand: "Honda",
    year: "1990",
    motor: "V6",
    horsepower: "270 hp",
    imageURL: "https://modelkars.com/wp-content/uploads/ig-model-0401-honda-nsx-red-900.jpg"    
  }

  car2 = {
    name: "MX5",
    brand: "Mazda",
    year: "1989 ",
    motor: "V4",
    horsepower: "181 hp",
    imageURL: "https://static.turbosquid.com/Preview/2019/07/03__09_27_37/Mazda_MX5_Mk1_NA_1989_600_0001.jpg1F2BE6A6-D065-41E0-9018-3F4C4DC6F2ABLarge.jpg"    
  }
  car3 = {
    name: "Civic Type-R",
    brand: "Honda",
    year: "1997",
    motor: "V4",
    horsepower: "182 hp",
    imageURL: "https://http2.mlstatic.com/D_NQ_NP_851711-MLM44588207534_012021-O.jpg"    
  }
  car4 = {
    name: "Lancer",
    brand: "Mitsubishi",
    year: "2018",
    motor: "V4",
    horsepower: "168 hp",
    imageURL: "https://ymimg1.b8cdn.com/uploads/car_model/3717/pictures/3354704/01.jpg"    
  }

  constructor(private router: Router) {}

  showText(){
    
    this.hiddenText = !this.hiddenText;
  }


  carPicked(selectedCar){
    let navigationExtras: NavigationExtras = {
      state: {
        car: selectedCar
      }
    };
    this.router.navigate(['/details'], navigationExtras);

  }

}
