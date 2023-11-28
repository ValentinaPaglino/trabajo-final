import React, { useState, useEffect} from 'react';
import styles from './Filtros.module.css';

const Filtros = ({ onFilterChange, onPriceChange, precioMax }) => {
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState(0);

    useEffect(() => {
        if (typeof precioMax === 'number' && !isNaN(precioMax)) {
            setPrecio(precioMax);
        }
    }, [precioMax]);

    const handleCategoriaChange = (e) => {
        const nuevaCategoria = e.target.value;
        setCategoria(nuevaCategoria);
        if (onFilterChange) {
            onFilterChange(nuevaCategoria, precio);
        }
    };

    const handlePrecioChange = (e) => {
        const nuevoPrecio = e.target.value;
        setPrecio(nuevoPrecio);
        if (onPriceChange) {
            onPriceChange(nuevoPrecio, categoria);
        }
    };

    return (
        <div className={styles.container}>
            <select
                name="categoria"
                className={styles.inputCategoria}
                value={categoria}
                onChange={handleCategoriaChange}
            >
                <option value="">Selecciona una categoría</option>
                <option value="Arte">Arte</option>
                <option value="Computacion y Tecnologia">Computacion y Tecnologia</option>
                <option value="Ficcion romantica">Ficcion romantica</option>
                <option value="Economia y Finanzas">Economia y Finanzas</option>
                <option value="Infantil y Juvenil">Infantil y Juvenil</option>
                <option value="Historia de America">Historia de America</option>
                <option value="Divulgacion cientifica">Divulgacion cientifica</option>
            </select>
            
            {/* Control deslizador para el precio */}
            <input
                type="range"
                name="precio_$"
                className={styles.slider}
                min="0"
                max={precioMax}
                value={precio}
                onChange={handlePrecioChange}
            />
            <span className={styles.precioLabel}>${precio}</span>
        </div>
    );
};

export default Filtros;

