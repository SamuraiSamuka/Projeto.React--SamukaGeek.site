import CampoTexto from "../../../Components/CampoTexto";
import NovoBotao from "../../../Components/NovoBotao";
import "./Perfil.css";
import { useContext } from "react";
import { UsuarioContext } from "../../../common/Usuario";

export default function Perfil() {
  const {usuario} = useContext(UsuarioContext);

  function converteData(stringData) {
    const data = new Date(stringData);
    const dia = data.getUTCDate();
    const mes = data.getUTCMonth();
    const ano = data.getFullYear();
    return (`${dia}/${mes}/${ano}`);
  }

  return (
    <div className="perfil">
      <div className="perfil__info">
        <h2 className="perfil__titulo">Informações pessoais</h2>
        <div className="perfil__campos">
          <div className="perfil__linha">
            <CampoTexto
              value={usuario.nome}
            >Nome</CampoTexto>
            <CampoTexto
              value={usuario.sobrenome}
            >Sobrenome</CampoTexto>
            <CampoTexto
              value={usuario.email}
            >E-mail</CampoTexto>
          </div>
          <div className="perfil__linha">
            <CampoTexto
              value={converteData(usuario.dataNascimento)}
            >Data de nascimento</CampoTexto>
            <CampoTexto
              value={usuario.bio}
            >Bio</CampoTexto>
          </div>
        </div>
      </div>
      <div className="perfil-dangerzone">
        <h3 className='perfil-dangerzone__titulo'>Zona de perigo<span className="perfil__logout-botao material-symbols-outlined">warning</span></h3>
        <div className="perfil__comandos">
          <NovoBotao funcao="link" corBorda="#fb0" to="/conta/perfil/editar">Alterar Dados</NovoBotao>
          <NovoBotao funcao="link" corBorda="#fb0" to="/conta/perfil/alterarsenha">Alterar Senha</NovoBotao>
          <NovoBotao funcao="link" corBorda="#ff3030" to="/conta/perfil/excluir">Excluir conta</NovoBotao>
        </div>
      </div>
    </div>
  );
}
