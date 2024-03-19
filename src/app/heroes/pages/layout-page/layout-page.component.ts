import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html'
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadier', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]



}
