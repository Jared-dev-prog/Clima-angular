import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  ciudad: string = '';

  constructor(private _climaService: ClimaService) {}

  public obtenerClima() {
    console.log(this.ciudad);
    this._climaService.getClima(this.ciudad).subscribe((data) => {
      console.log(data);
    });
  }
}
