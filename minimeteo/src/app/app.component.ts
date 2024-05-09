import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Falsy } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minimeteo';
  nome: any;
  temp: any;
  umidita: any;
  desc: any;
  feelslike: any;
  countrycode: any;
  loadingcomplete = false;
  loading = false;
  sunrise: any;
  sunset: any;
  icona: any;
  error = false;
  mintemp: any;
  maxtemp: any;
  vento: any;
  

  constructor() {}

  ngOnInit() {}

  prendiMeteo(citta: any) {
    
    this.loading = true
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citta+'&appid=0303151fe41fe8d629b56c4bdd4c470f&units=metric&lang=it')
    .then(response => response.json())
    .then(data => {
      this.loadingcomplete = false;
      if (data['cod'] = '404')
      {
        this.error = true;
        this.loading = false;
      }
      else
      {
        this.error = false;
      }
      this.temp = data['main']['temp'];
      this.nome = data['name'];
      this.desc = data['weather'][0]['description'];
      this.umidita = data['main']['humidity'];
      this.feelslike = data['main']['feels_like'];
      this.countrycode = data['sys']['country'];
      this.sunrise = data['sys']['sunrise'];
      this.sunset = data['sys']['sunset'];
      this.mintemp = data['main']['temp_min'];
      this.maxtemp = data['main']['temp_max'];
      this.vento = data['wind']['speed'];
      this.icona = data['weather'][0]['icon'];
      this.icona = 'https://openweathermap.org/img/wn/'+this.icona+'@2x.png';
      this.sunrise = this.sunrise;
      this.sunset = this.sunset;
      let d = new Date(this.sunrise * 1000);
      this.sunrise = d.getHours().toString() + ':' + d.getMinutes().toString();
      d = new Date(this.sunset * 1000);
      this.sunset = d.getHours().toString() + ':' + d.getMinutes().toString();
      this.loadingcomplete = true;
      this.loading = false;
      this.error = false;
    })}
}
