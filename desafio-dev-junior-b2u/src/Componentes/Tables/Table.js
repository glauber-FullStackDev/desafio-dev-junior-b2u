import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState , useEffect } from 'react';
import Modal from '../modal/modal';
import './styles.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';

// function createData(
//   name: string,
//   marca: string,
//   modelo: string,
//   data: number,
// ) {
//   return { name, marca, modelo, data};
// }

// const rows = [
//   createData('', 159, 6.0, 24, 4.0),
//   createData('', 237, 9.0, 37, 4.3),
//   createData('', 262, 16.0, 24, 6.0),
//   createData('', 305, 3.7, 67, 4.3),
//   createData('', 356, 16.0, 49, 3.9),
// ];

 function DenseTable() {
  const [listar ,setLista] = useState([]);
  const [open, setOpen] = useState('')
  async function lista(){
    
    try {
      const response = await api.get('/listarCarro')
      setLista([...response.data])
      console.log(response.data)
      
    } catch (error) {
      console.log(error.response)
    }
  }
  async function handleEdit(){
    setOpen(true) 
  }
  useEffect(()=>{
    lista()
  },[])

  return (
    <TableContainer className='table' component={Paper}>
      <Table sx={{ justifyContent:'center', background:'#4f4f4f'}} size="" aria-label="">
        <TableHead>
          <TableRow>
          
            <TableCell sx={{color:'#D6006E', fontSize:28}}>Marca</TableCell>
            <TableCell  sx={{color:'#D6006E', fontSize:28}} align="right">Modelo</TableCell>
            <TableCell  sx={{color:'#D6006E', fontSize:28}} align="right">Data/Fab&nbsp;</TableCell>
            <TableCell sx={{color:'#D6006E', fontSize:28}} align="right">Descrição&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listar.map((lista) => (
            <TableRow
              key={lista.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               
              <TableCell component="th" scope="row" sx={{color:'#02ca63'}}>
                {lista.nome}
              </TableCell>
             
              <TableCell sx={{color:'#02ca63'}} align="right">{lista.marca}</TableCell>
              <TableCell sx={{color:'#02ca63'}} align="right">{lista.data_fabricacao}</TableCell>
              <TableCell sx={{color:'#02ca63'}}  align="right">{lista.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <div className='btn-button'> 
        <button onClick={()=>handleEdit()}>
                Atualizar
            </button>

            <button className='color-red'><Link to="/DeletarCarro">Deletar</Link></button>
        </div>
            
      </Table>
      <Modal 
        open={open}
        handleClose={()=>setOpen(false)}
      />
    </TableContainer>
    
  );
}
export default DenseTable