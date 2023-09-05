import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../container/BarraLateral'
import ListaDeTarefas from '../../container/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
