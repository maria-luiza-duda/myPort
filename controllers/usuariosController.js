const usuariosController = {
    index: (req, res) => {
        return res.send('estou exibindo esta mensagem através do controller!')
    }
}

module.exports = usuariosController;