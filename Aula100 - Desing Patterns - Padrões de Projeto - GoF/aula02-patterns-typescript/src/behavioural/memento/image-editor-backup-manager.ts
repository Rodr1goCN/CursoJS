import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];
  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`BACKUP: salvando o estado de imageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backup: sem memento');
      return;
    }
    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado com sucesso`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
