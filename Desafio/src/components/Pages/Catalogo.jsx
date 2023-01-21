import styles from './Catalogo.module.css';
import { useState, useEffect } from 'react';
import api from '../Services/Api';
import EditForm from '../Catalogo/EditForm';
import Card from '../Catalogo/Card';
import InputSearch from '../Input/InputSearch';

function Catalogo() {
    const [todosDados, setTodosDados] = useState([]);
    const [deletado, setDeletado] = useState();
    const [editing, setEditing] = useState(false);
    const [editingData, setEditingData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['---' ,'Marca', 'Carro'];

    /* Esta linha está filtrando os dados da lista "todosDados" 
    de acordo com a opção selecionada e o termo de busca inserido pelo usuário. */
    const filtroBusca = todosDados.filter(item => {
        if(selectedOption === 'Marca'){
            return item.marca.toLowerCase().startsWith(searchTerm.toLowerCase());
        } else if(selectedOption === 'Carro'){
            return item.carro.toLowerCase().startsWith(searchTerm.toLocaleLowerCase());
        }
        return true;
    });

    // Faz a chamada da api com o verbo "get" para retornar todos os dados para exibir a lista em tela
    useEffect(() => {
        async function pegarDados() {
          const response = await api.get('/',);
          setTodosDados(response.data)
        }
        pegarDados();
    }, [])

    // Remove da tela quando verificar que o item foi removido do banco de dados
    useEffect(() => {
        if (deletado) {
            setTodosDados(todosDados.filter(item => item._id !== deletado));
        }
    }, [deletado, todosDados])

    // Faz a chamada da api usando o vervo "delete" e apaga os dados do banco
    async function handleDelete(id) {
        await api.delete(`/${id}`)
        setDeletado(id);
    }

    // Mostra a tela de edição apartir de qual item foi selecionado para editar
    function handleEdit(item) {
        setEditing(true);
        setEditingData(item);
    }

    // Faz a chama da api usando o verbo "put" e salva os dados que o usuário deseja atualizar
    async function handleUpdate(updatedData) {
        await api.put(`/dados/${updatedData._id}`, updatedData);
        const response = await api.get('/',);
        setTodosDados(response.data);
        setEditing(false);
    }

    // HTML
    return(
        <section className={styles.background}>
            
            {!editing && (
                <div className={styles.search}>
                    <InputSearch
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                        options={options}
                    />
                </div>
            )}
            
            <main>
                {editing ? (
                    <EditForm
                        data={editingData}
                        onSave={handleUpdate}
                        onCancel={() => setEditing(false)}
                        setEditingData={setEditingData}
                    />
                ) : (
                    filtroBusca.map((item) =>
                        <Card
                            key={item._id}
                            data={item}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    )
                )}
            </main>
        </section>
    )
}

export default Catalogo;