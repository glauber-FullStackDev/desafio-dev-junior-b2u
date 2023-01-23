import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import './index.scss'


export default function Index() {
    return (
        <main className='page page-home'>
            <Menu selecionado='home'/>
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>
                    <img className='logo-estilizado' src='/assets/images/logo-styled.svg' alt='logo estilizado' />
                </div>
            </div>
        </main>
    )
}

