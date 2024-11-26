//Validação de login

export class Usuarios {
    #get() {
        const data = localStorage.getItem('usuarios');
        return data ? JSON.parse(data) : [];
    }

    #set(data) {
        localStorage.setItem('usuarios', JSON.stringify(data));
    }

    login(email, senha){
        const usuarios = this.#get();
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email === email && usuario.senha === senha
        );

        return usuarioEncontrado ? usuarioEncontrado : null;
    }

    criar(usuario) {
        const data = this.#get();
        this.#set([...data, usuario]);
    }
}