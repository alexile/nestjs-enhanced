import { CustomTransportStrategy, Server } from '@nestjs/microservices';
import { BrowserWindow, app } from 'electron';
import { DEFAULT_BROWSER_WINDOW_OPTIONS } from './constants/electron-options';

export class ElectronIpcTransport extends Server implements CustomTransportStrategy {
  constructor(private readonly options: Electron.BrowserWindowConstructorOptions) {
    super();
  }

  close(): void {
    // TODO
  }

  private createWindow() {
    if (BrowserWindow.getAllWindows().length === 0) {
      const mainWindow = new BrowserWindow({
        ...DEFAULT_BROWSER_WINDOW_OPTIONS,
        ...this.options,
      });

      mainWindow.webContents.openDevTools();
    }
  }

  async listen(callback: (...optionalParams: unknown[]) => void): Promise<void> {
    app.on('ready', () => this.createWindow());
    app.on('activate', () => this.createWindow());
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
    // TODO start app
    // TODO handle messages
    callback();
  }
}
