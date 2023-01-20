import './styles.css'
import Header from '../../Componentes/Header/Header'
import DenseTable from '../../Componentes/Tables/Table'
function Consultar(){
    return(
        <>
        <Header/>
        <div className='consulta-area'>
            <h1>Estoque de carros</h1>
        
             <div className='table'>
                <DenseTable/>
            </div>
        </div>
       
        </>
    )
}

export default Consultar