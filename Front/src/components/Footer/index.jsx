import { Link } from "react-router-dom"

import { FaStar } from "react-icons/fa"

import './styles.css'

export function Footer() {
    return (
        <footer>
            <h3>Anuncie os seus melhores carros!</h3>
            <p>feito por <a href="https://github.com/MarceloLimaCodes" target="_blank">MarceloLimaCodes</a></p>
            <p><span>CarAdHouse</span> &copy; 2023</p>
        </footer>
    )
}