class HomeController {
  index(req, res) {
    res.json({
      tudoBeleza: true,
    });
  }
}

export default new HomeController();
