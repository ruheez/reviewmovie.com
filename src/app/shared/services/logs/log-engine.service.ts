import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogEngineService {

  constructor() {
  }

  log(message: string, component: string, method: string) {
    let logEntry = this.createLogStatement('Log', message, component, method);
    console.log(logEntry);
    return logEntry;
  }

  info(message: string, component: string, method: string) {
    let logEntry = this.createLogStatement('Info', message, component, method);
    console.info(logEntry);
    return logEntry;
  }

  warn(message: string, component: string, method: string) {
    let logEntry = this.createLogStatement('Warning', message, component, method);
    console.warn(logEntry);
    return logEntry;
  }

  error(message: string, component: string, method: string) {
    let logEntry = this.createLogStatement('Error', message, component, method);
    console.error(logEntry);
    return logEntry;
  }

  debug(message: string, component: string, method: string) {
    let logEntry = this.createLogStatement('Debug', message, component, method);
    console.info(logEntry);
    return logEntry;
  }

  trace(message: string, component: string, method: string) {
    let logEntry = this.createLogStatement('Trace', message, component, method);
    console.trace(logEntry);
    return logEntry;
  }

  getCurrentDate() {
    let now = new Date();
    return '[' + now.toLocaleString() + ']';
  }

  createLogStatement(level: string, message: string, component: string, method: string) {
    let SEPARATOR = ' ';
    let currentDate = this.getCurrentDate();
    return (
      '[' + component + ']' + SEPARATOR + '[' + level + ']' + SEPARATOR + '[' + method + ']' + SEPARATOR + currentDate + SEPARATOR + message
    );
  }
}
