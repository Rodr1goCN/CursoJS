import React, { Component } from "react";
import "./Main.css";

import Form from "./form";
import Tarefas from "./Tarefas";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevPops, prevsState) {
    // PrevProps - propriedades anteriores // prevState - estado anterior
    const { tarefas } = this.state;
    if (tarefas === prevsState.tarefas) return;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); // Elimina os espaços vazios da frase

    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state; // Usa a desestruturação para obter o array de tarefas do estado do componente. Isso pressupõe que o componente tem um estado (this.state) que contém um array chamado tarefas.
    const novasTarefas = [...tarefas]; // Cria uma cópia do array de tarefas usando o operador de spread ([...tarefas]). Isso é feito para evitar a modificação do estado original, o que é uma boa prática de programação.
    novasTarefas.splice(index, 1); // Usa o método splice para remover 1 elemento do array novasTarefas na posição index. Isso tem o efeito de excluir a tarefa na posição indicada.
    this.setState({
      // Atualiza o estado do componente usando setState(). Ele define o estado tarefas com a nova lista de tarefas, que agora não inclui mais a tarefa removida. Isso aciona uma re-renderização do componente, refletindo as mudanças na interface do usuário.
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
