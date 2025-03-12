import React, {useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Teste from './components/teste';

function App() {
  const baseUrl="https://localhost:7220/api/alunos";
  const [data, setData]=useState([]);

  const alunosGet = async() => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect( () => {
    alunosGet();
  })

  return (
    <>
      <div className="alunos-container">
        <br />
        <h3>Cadastro de Alunos</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {data.map(aluno => (
              <tr key={aluno.Id}>
                <td>{aluno.Id}</td>
                <td>{aluno.Name}</td>
                <td>{aluno.Email}</td>
                <td>{aluno.Idade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Teste />
      </div>
    </>
  );
}

export default App;
