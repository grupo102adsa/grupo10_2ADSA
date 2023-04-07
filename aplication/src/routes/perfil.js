var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/", function (req, res) {
    perfilController.testar(req, res);
});

router.get("/listar", function (req, res) {
    perfilController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    perfilController.cadastrar(req, res);
})

router.post("/entrar", function (req, res) {
    perfilController.entrar(req, res);
});

module.exports = router;