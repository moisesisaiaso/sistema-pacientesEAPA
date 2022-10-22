import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/styles.module.css";
import {
    Button,
    Table,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

import { Busqueda } from "./Busqueda.js";
import { useState } from "react";

const data = [
    {
        id: 1,
        cedula: "0850063397",
        nombre: "Moises Isaias",
        historiaClinica: "08001234337",
        sexo: "Hombre",
        grupoSanguineo: "O+ ",
        fechaNacimiento: "1996-02-26",
        edad: "55 años",
        peso: "99 Kg",
        presionArterial: "120 / 80 mm",
        saturacionOxigeno: "0 %",
    },
    {
        id: 2,
        cedula: "0850063397",
        nombre: "Mari Ante",
        historiaClinica: "08001234337",
        sexo: "Mujer",
        grupoSanguineo: "O +",
        fechaNacimiento: "1996-02-26",
        edad: "55 años",
        peso: "99 Kg",
        presionArterial: "120 / 80 mm",
        saturacionOxigeno: "0 %",
    },
    {
        id: 3,
        cedula: "0850063397",
        nombre: "Maddy Ortiz ",
        historiaClinica: "08001234337",
        sexo: "Mujer",
        grupoSanguineo: "O +",
        fechaNacimiento: "1996-02-26",
        edad: "55 años",
        peso: "99 Kg",
        presionArterial: "120 / 80 mm",
        saturacionOxigeno: "0 %",
    },
    {
        id: 4,
        cedula: "0850063397",
        nombre: "Pablo Perez",
        historiaClinica: "08001234337",
        sexo: "Hombre",
        grupoSanguineo: "O+ ",
        fechaNacimiento: "1996-02-26",
        edad: "55 años",
        peso: "99 Kg",
        presionArterial: "120 / 80 mm",
        saturacionOxigeno: "0 %",
    },
];

export const PatientList = () => {
    const [form, setForm] = useState({
        cedula: "",
        sexo: "",
        nombre: "",
        historiaClinica: "",
        grupoSanguineo: "",
        fechaNacimiento: "",
        edad: "",
        peso: "",
        presionArterial: "",
        saturacionOxigeno: "",
    });

    const [modalInsertar, setModalInsertar] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const mostrarModalInsertar = () => {
        setModalInsertar(true);
    };

    const ocultarModalInsertar = () => {
        setModalInsertar(false);
    };
    return (
        <>
            <Container>
                <br />
                <Button color="primary" onClick={() => mostrarModalInsertar()}>
                    {" "}
                    Insertar Paciente
                </Button>
                <br />
                <br />
                <Busqueda />

                <br />
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cedula</th>
                            <th>Nombre</th>
                            <th>Historia Clínica</th>
                            <th>Sexo</th>
                            <th>Grupo Sanguineo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((patient) => (
                            <tr>
                                <td>{patient.id}</td>
                                <td>{patient.cedula}</td>
                                <td>{patient.nombre}</td>
                                <td>{patient.historiaClinica}</td>
                                <td>{patient.sexo} </td>
                                <td>{patient.grupoSanguineo}</td>
                                <td>
                                    <Button color="primary" onClick={() => mostrarModalInsertar()}>
                                        Editar
                                    </Button>
                                    {"  "}
                                    <Button color="danger">Eliminar</Button>
                                    {"  "}
                                    <Button color="info">Ver</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            {/* //MODAL */}

            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div>
                        <h3>Editar Registro</h3>
                    </div>
                </ModalHeader>
                <ModalBody style={{ display: "flex", flexWrap: "wrap", flexGrow: 2 }}>
                    <FormGroup className={styles.space}>
                        <label>Cedula:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="cedula"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Nombre:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="nombre"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.space}>
                        <label>Historia Clínica:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="historiaClinica"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Sexo:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="sexo"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.space}>
                        <label>Grupo Sanguineo:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="grupoSanguineo"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Fecha de Nacimiento:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="fechaNacimiento"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.space}>
                        <label>Edad:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="edad"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Peso:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="peso"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className={styles.space}>
                        <label>Presion Arterial:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="presionArterial"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Saturacion Oxigeno:</label>
                        <input
                            className={`form-control ${styles.widthInput}`}
                            name="peso"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary">Insertar</Button>
                    <Button color="danger" onClick={ocultarModalInsertar}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
