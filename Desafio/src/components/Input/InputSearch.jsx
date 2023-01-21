import styles from './InputSearch.module.css';

function InputSearch({ searchTerm, setSearchTerm, selectedOption, setSelectedOption, options }) {
    return(
        <div className={styles.input}>
            <label>Buscar:</label>
            <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={selectedOption === '---' ? 'Buscar' : selectedOption} />
        </div>
    )
}

export default InputSearch;