import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, FooterComponent, WhatsappFloatComponent } from './shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappFloatComponent],
  template: `
    <div class="app-container">
      <app-header />
      <main class="main-content">
        <router-outlet />
      </main>
      <app-footer />
      <app-whatsapp-float 
        phoneNumber="+525555551234"
        message="Hola! Me interesa saber más sobre los servicios de Meridian."
        messageText="¡Hola! ¿Necesitas ayuda? Escríbenos por WhatsApp"
        [showNotification]="true"
        [showPulse]="true" />
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent {
  title = 'nueva-page-spa';
}