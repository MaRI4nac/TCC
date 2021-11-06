import { Table_header, Table_content } from '../crud/table'
import { Container } from './styled'

const apiSimulation = [
    {
      "usuario": "Bruno",
      "email": "brunodeoliveira.22.10@gmail.com",
      "keyuser": 13
    },
    {
      "usuario": "json.nmUsu",
      "email": "mariana@gmail.com",
      "keyuser": 10
    },
    {
      "usuario": "Levy",
      "email": "levy@gmail.com",
      "keyuser": 2
    },
    {
      "usuario": "Levy",
      "email": "levy@gmail.com",
      "keyuser": 3
    },
    {
      "usuario": "Levy",
      "email": "levy@gmail.com",
      "keyuser": 4
    },
    {
      "usuario": "Levy",
      "email": "levy@gmail.com",
      "keyuser": 5
    },
    {
      "usuario": "Levy",
      "email": "levy@gmail.com",
      "keyuser": 6
    },
    {
      "usuario": "Levy",
      "email": "levyfronto@gmail.com",
      "keyuser": 8
    },
    {
      "usuario": "Levy",
      "email": "levyfronto123@gmail.com",
      "keyuser": 9
    },
    {
      "usuario": "Mariana",
      "email": "afwafawfawf",
      "keyuser": 7
    },
    {
      "usuario": "Mariana",
      "email": "akhdugdusbdsd",
      "keyuser": 11
    },
    {
      "usuario": "Mariana",
      "email": "akhdugduswrwer",
      "keyuser": 12
    },
    {
      "usuario": "teste",
      "email": "fawfasfawfasf",
      "keyuser": 17
    },
    {
      "usuario": "wafwafawf",
      "email": "teste",
      "keyuser": 18
    }
  ]

export default function GestaoUsuario() {
    return (
        <Container>
            <h1> Usuários </h1>
            <button className="filter"> 
                <div> Listar em ordem alfabetica  </div>
                <img src="/assets/images/userArrow.png" alt="" />
            </button>
            <table>
                <Table_header titulo1 ="Usuário" titulo2="Email"/>
                {apiSimulation.map(item => {
                    return <Table_content key={item.keyuser} campo1={item.usuario} campo2 ={item.email} usuario={true} />
                })}
            </table>
        </Container>
    )
}