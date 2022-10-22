import React from "react";
import styles from "../styles/styles.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import eapa from "../assets/img/EAPAA.png";

export const Navbarr = () => {
    return (
        <Navbar className={`my-2 ${styles.navbar}`} color="dark" dark style={{ flexGrow: 1 }}>
            <NavbarBrand href="/">
                <img
                    alt="logo"
                    src={eapa}
                    style={{
                        height: 60,
                        width: 100,
                    }}
                />
                {"  "}
                <h2> Sistema Médico</h2>
            </NavbarBrand>

            <Nav className={styles.navSize}>
                <NavItem>
                    <NavLink active href="#" className={styles.navlink}>
                        Patients
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className={styles.navlink}>
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className={styles.navlink}>
                        Sign out
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};
