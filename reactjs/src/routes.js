import { BrowserRouter,Switch, Route } from 'react-router-dom';
import ConfirmacaoCompra from './pages/administrativo/confirmacao-compra/index.js'
import NovaSenha from './pages/usuario/nova-senha/index.js'
import EsqueceuSenha from './pages/usuario/login/esqueceu-senha/index.js'
import SiteCompleto from "./index-principal.js";
import ADMLogin from "./pages/administrativo/login/index.js";
import NWSCriarConta from "./pages/usuario/login/criar-conta";
import Cabecalho from "./components/cabecalho";
import NWSLogar from "./pages/usuario/login/logar"
import BuscaDireta from "./pages/usuario/busca-direta"
import Ingressos from './pages/usuario/ingressos/index.js';
import BuscaDirecionada from './pages/usuario/busca-direcionada/index.js';
import TelaInicial from './pages/usuario/principal'
import ADMPrincipal from './pages/administrativo/adm-principal/index.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={SiteCompleto} /> 
                <Route path="/criarconta"  component={NWSCriarConta} />
                <Route path="/cabecalho"  component={Cabecalho} />
                <Route path="/logar"  component={NWSLogar} />
                <Route path="/compra"  component={ConfirmacaoCompra} />
                <Route path="/novasenha"  component={NovaSenha} />
                <Route path="/esqueceusenha"  component={EsqueceuSenha} />
                <Route path="/admlogin" component={ADMLogin} />
                <Route path="/buscadireta" component={BuscaDireta} />
                <Route path="/buscadirecionada" component={BuscaDirecionada} />
                <Route path="/ingressos" component={Ingressos} />
                <Route path="/inicial" component={TelaInicial} />
                <Route path="/admprincipal" component={ADMPrincipal} />
            </Switch>
        </BrowserRouter>
    )
}