import './styles.css';

function Input({ props }) {
    return (
        <div className="input-container">
            <label for="input">label</label>

            <input type="text" placeholder="Placeholder" id="input" className="default" />
        </div>
    );
}

export default Input;
