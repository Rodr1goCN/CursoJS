import multer from 'multer';
import multerConfig from '../config/multerConfig';

class FotoController {
  async store(req, res) {
    res.json(req.file);
  }
}

export default new FotoController();
