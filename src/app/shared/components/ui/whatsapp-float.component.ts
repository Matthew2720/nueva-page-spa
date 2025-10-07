import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  template: `
    <div class="whatsapp-float" [class.hidden]="!visible">
      <a
        [href]="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-button"
        [matTooltip]="tooltipText"
        matTooltipPosition="left"
        [attr.aria-label]="ariaLabel">
        
        <!-- WhatsApp Icon -->
        <svg
          class="whatsapp-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.69"/>
        </svg>

        <!-- Notification Badge -->
        <div class="notification-badge" *ngIf="showNotification">
          <span class="notification-text">{{ notificationCount || '!' }}</span>
        </div>

        <!-- Pulse Animation -->
        <div class="pulse-ring" *ngIf="showPulse"></div>
      </a>

      <!-- Message Bubble -->
      <div class="message-bubble" *ngIf="showMessage && messageText" [class.visible]="messageBubbleVisible">
        <div class="message-content">
          <p class="message-text">{{ messageText }}</p>
          <button
            class="message-close"
            (click)="hideMessage()"
            aria-label="Cerrar mensaje">
            ×
          </button>
        </div>
        <div class="message-arrow"></div>
      </div>
    </div>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .whatsapp-float.hidden {
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
    }

    /* WhatsApp Button */
    .whatsapp-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: #25D366;
      border-radius: 50%;
      color: white;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
      transition: all 0.3s ease;
      position: relative;
      overflow: visible;
    }

    .whatsapp-button:hover {
      background: #20BA5A;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(37, 211, 102, 0.5);
    }

    .whatsapp-button:active {
      transform: translateY(0);
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    }

    /* WhatsApp Icon */
    .whatsapp-icon {
      width: 32px;
      height: 32px;
      fill: currentColor;
    }

    /* Notification Badge */
    .notification-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #ff4444;
      color: white;
      border-radius: 50%;
      min-width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 600;
      border: 2px solid white;
      animation: bounce 1s ease-in-out infinite alternate;
    }

    .notification-text {
      line-height: 1;
    }

    /* Pulse Animation */
    .pulse-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      border: 3px solid #25D366;
      border-radius: 50%;
      opacity: 0;
      animation: pulse 2s ease-out infinite;
    }

    @keyframes pulse {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0.8);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.2);
      }
    }

    @keyframes bounce {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }

    /* Message Bubble */
    .message-bubble {
      position: absolute;
      bottom: 70px;
      right: 0;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      max-width: 280px;
      opacity: 0;
      transform: translateY(10px) scale(0.95);
      transition: all 0.3s ease;
      pointer-events: none;
    }

    .message-bubble.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .message-content {
      padding: 16px;
      position: relative;
    }

    .message-text {
      margin: 0;
      color: var(--text-primary, #333);
      font-size: 0.9rem;
      line-height: 1.4;
      padding-right: 24px;
    }

    .message-close {
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      color: var(--text-muted, #666);
      cursor: pointer;
      font-size: 1.25rem;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    .message-close:hover {
      background: var(--bg-secondary, #f8f9fa);
      color: var(--text-primary, #333);
    }

    .message-arrow {
      position: absolute;
      bottom: -8px;
      right: 24px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .whatsapp-float {
        bottom: 20px;
        right: 20px;
      }

      .whatsapp-button {
        width: 56px;
        height: 56px;
      }

      .whatsapp-icon {
        width: 28px;
        height: 28px;
      }

      .message-bubble {
        max-width: 240px;
        bottom: 66px;
      }

      .message-content {
        padding: 14px;
      }

      .message-text {
        font-size: 0.85rem;
      }
    }

    @media (max-width: 480px) {
      .whatsapp-float {
        bottom: 16px;
        right: 16px;
      }

      .whatsapp-button {
        width: 52px;
        height: 52px;
      }

      .whatsapp-icon {
        width: 26px;
        height: 26px;
      }

      .message-bubble {
        max-width: 200px;
        bottom: 62px;
        right: -16px;
      }

      .message-arrow {
        right: 32px;
      }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .whatsapp-button,
      .message-bubble,
      .notification-badge {
        transition: none;
        animation: none;
      }

      .pulse-ring {
        display: none;
      }
    }

    /* Focus States */
    .whatsapp-button:focus {
      outline: 2px solid #25D366;
      outline-offset: 4px;
    }

    .message-close:focus {
      outline: 2px solid var(--brand-primary, #8B7355);
      outline-offset: 2px;
    }

    /* High Contrast Mode */
    @media (prefers-contrast: high) {
      .whatsapp-button {
        border: 2px solid white;
      }

      .message-bubble {
        border: 1px solid #ccc;
      }
    }
  `]
})
export class WhatsappFloatComponent {
  @Input() phoneNumber = '+525555551234'; // Default phone number
  @Input() message = 'Hola! Me interesa saber más sobre sus servicios.'; // Default message
  @Input() visible = true;
  @Input() showNotification = false;
  @Input() notificationCount?: number;
  @Input() showPulse = true;
  @Input() showMessage = true;
  @Input() messageText = '¡Hola! ¿Necesitas ayuda? Escríbenos por WhatsApp';
  @Input() tooltipText = 'Contactar por WhatsApp';
  @Input() ariaLabel = 'Contactar por WhatsApp';

  messageBubbleVisible = false;

  constructor() {
    // Show message bubble after component loads
    setTimeout(() => {
      if (this.showMessage) {
        this.messageBubbleVisible = true;
        
        // Auto-hide message after 8 seconds
        setTimeout(() => {
          this.messageBubbleVisible = false;
        }, 8000);
      }
    }, 2000);
  }

  get whatsappUrl(): string {
    const cleanPhoneNumber = this.phoneNumber.replace(/[^\d+]/g, '');
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
  }

  hideMessage(): void {
    this.messageBubbleVisible = false;
  }

  showMessageBubble(): void {
    if (this.showMessage) {
      this.messageBubbleVisible = true;
    }
  }
}