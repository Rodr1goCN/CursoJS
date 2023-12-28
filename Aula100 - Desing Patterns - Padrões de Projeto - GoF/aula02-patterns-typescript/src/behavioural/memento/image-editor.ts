import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

export class ImageEditor {
  constructor(
    private filePath: string,
    private fileFormat: string,
  ) {}
  convertFormat(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }

  save(): Readonly<Memento> {
    const date = new Date();
    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.fileFormat,
      this.filePath,
    );
  }

  restore(memento: Memento): void {
    // Faz isso para poder usar o getFileFormat getFilePath dentro do memento
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileformat();
  }
}

const img = new ImageEditor('/media/imagem.png', 'png');
//img.convertFormat('jpg');
console.log(img);
