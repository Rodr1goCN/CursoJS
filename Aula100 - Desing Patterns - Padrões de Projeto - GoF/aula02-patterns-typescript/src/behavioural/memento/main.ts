import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormat('gif');

backupManager.backup();
imageEditor.convertFormat('tiff');

backupManager.backup();
imageEditor.convertFormat('bmp');

//backupManager.undo();

console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);

backupManager.undo();
console.log(imageEditor);
