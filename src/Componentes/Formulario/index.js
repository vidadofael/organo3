import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Dev-Ops',
    'UX Desingn',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
