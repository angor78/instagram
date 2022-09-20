import { Injectable } from '@angular/core'

export type SeverityType = 'success' | 'error' | 'info'

@Injectable({
  providedIn: 'root',
})
export class AmazingLoggerService {
  log(message: string, severity: SeverityType) {
    console.log(`%c${message} value`, this.getSeverity(severity))
  }
  getSeverity(severity: SeverityType) {
    switch (severity) {
      case 'success':
        return `background:green;`
      case 'error':
        return `background:red;`
      case 'info':
        return `background:blue;`
      default:
        return ''
    }
  }
}
