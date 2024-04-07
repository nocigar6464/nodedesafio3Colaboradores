import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((dataform) => (
          <tr key={dataform.id}>
            <td>{dataform.nombre}</td>
            <td>{dataform.correo}</td>
            <td>{dataform.edad}</td>
            <td>{dataform.cargo}</td>
            <td>{dataform.telefono}</td>
          </tr>
        ))}
        {/* {dataform.map(({id, nombre, correo, edad, cargo, telefono}) => (
          <tr key={id}>
            <td>{nombre}</td>
            <td>{correo}</td>
            <td>{edad}</td>
            <td>{cargo}</td>
             <td>{telefono}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  );
};

export default Listado;
