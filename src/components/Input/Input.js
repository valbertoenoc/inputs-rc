import './styles.scss';

function Input({ label }) {
    return (
        <div className="input-container">
            <label htmlFor="input">{label}</label>
            <input type="text" placeholder="Placeholder" id="input" className="default" />
        </div>
    );
}

export default Input;
