import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import {
//     Button,
//     Table,
//     Container,
//     Modal,
//     ModalHeader,
//     ModalBody,
//     FormGroup,
//     ModalFooter,
// } from "reactstrap";
// import { useState } from "react";

// const data = [
//     {
//         id: 1,
//         cedula: "0850063397",
//         nombre: "Moises Isaias",
//         email: "moisesisaias23mar@gmail.com",
//         tipoSangre: "O+",
//     },
//     {
//         id: 2,
//         cedula: "0850063397",
//         nombre: "Mari Ante",
//         email: "mariante@gmail.com",
//         tipoSangre: "O+",
//     },
//     {
//         id: 3,
//         cedula: "0850063397",
//         nombre: "Maddy Ortiz ",
//         email: "maddyortizmar@gmail.com",
//         tipoSangre: "O+",
//     },
//     {
//         id: 4,
//         cedula: "0850063397",
//         nombre: "Pablo Perez",
//         email: "pabloperez@gmail.com",
//         tipoSangre: "O+",
//     },
// ];

// function App() {
//     const [form, setForm] = useState({
//         id: "",
//         cedula: "",
//         nombre: "",
//         email: "",
//         tipoSangre: "",
//     });

//     const [modalInsertar, setModalInsertar] = useState(false);

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const mostrarModalInsertar = () => {
//         setModalInsertar(true);
//     };

//     const ocultarModalInsertar = () => {
//         setModalInsertar(false);
//     };
//     return (
//         <>
//             <Container>
//                 <br />
//                 <Button color="primary" onClick={() => mostrarModalInsertar()}>
//                     {" "}
//                     Insertar Paciente
//                 </Button>
//                 <br />
//                 <br />
//                 <Table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Cedula</th>
//                             <th>Nombre</th>
//                             <th>Email</th>
//                             <th>Tipo de sangre</th>
//                             <th>Acciones</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((patient) => (
//                             <tr>
//                                 <td>{patient.id}</td>
//                                 <td>{patient.cedula}</td>
//                                 <td>{patient.nombre}</td>
//                                 <td>{patient.email}</td>
//                                 <td>{patient.tipoSangre}</td>
//                                 <td>
//                                     <Button color="primary">Editar</Button>
//                                     {"  "}
//                                     <Button color="danger">Eliminar</Button>
//                                     {"  "}
//                                     <Button color="info">Ver</Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </Container>

//             {/* //MODAL */}

//             <Modal isOpen={modalInsertar}>
//                 <ModalHeader>
//                     <div>
//                         <h3>Editar Registro</h3>
//                     </div>
//                 </ModalHeader>
//                 <ModalBody>
//                     <FormGroup>
//                         <label>Id:</label>
//                         <input
//                             className="form-control"
//                             readOnly
//                             type="text"
//                             value={data.length + 1}
//                             onChange={handleChange}
//                         />
//                     </FormGroup>
//                     <FormGroup>
//                         <label>Cedula:</label>
//                         <input
//                             className="form-control"
//                             name="cedula"
//                             type="text"
//                             onChange={handleChange}
//                         />
//                     </FormGroup>
//                     <FormGroup>
//                         <label>Nombre:</label>
//                         <input
//                             className="form-control"
//                             name="nombre"
//                             type="text"
//                             onChange={handleChange}
//                         />
//                     </FormGroup>
//                     <FormGroup>
//                         <label>Email:</label>
//                         <input
//                             className="form-control"
//                             name="email"
//                             type="text"
//                             onChange={handleChange}
//                         />
//                     </FormGroup>
//                     <FormGroup>
//                         <label>Tipo de Sangre:</label>
//                         <input
//                             className="form-control"
//                             name="tipoSangre"
//                             type="text"
//                             onChange={handleChange}
//                         />
//                     </FormGroup>
//                 </ModalBody>

//                 <ModalFooter>
//                     <Button color="primary">Insertar</Button>
//                     <Button color="danger" onClick={ocultarModalInsertar}>
//                         Cancelar
//                     </Button>
//                 </ModalFooter>
//             </Modal>
//         </>
//     );
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbarr } from "./components/Navbar";
import { PatientList } from "./components/PatientList.js";
import { PatientForm } from "./components/PatientForm.js";

function App() {
    return (
        <BrowserRouter>
            <Navbarr />
            <Routes>
                <Route path="/" element={<PatientList />}></Route>
                <Route path="/patients/new" element={<PatientForm />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
