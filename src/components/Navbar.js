import React from "react";
import styles from "../styles/styles.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavbarBrand } from "reactstrap";

export const Navbarr = () => {
    return (
        <Navbar className={`my-2 ${styles.nav}`} color="dark" dark fixed>
            <NavbarBrand href="/">
                <img
                    alt="logo"
                    src="/logo-white.svg"
                    style={{
                        height: 40,
                        width: 40,
                    }}
                />
                Reactstrap
                <h1 className={styles.cualquierCosa}>Moises</h1>
            </NavbarBrand>
        </Navbar>
    );
};
