export const Modal = (props) => {
    return (
        <div className="modal">
            <p>Did you complete this task?</p>
            <button onClick={() => props.dismissModal()} classname="btn btn-highlight">Canel</button>
            <button onClick={() =>props.dismissModal()} classname="btn btn-hgihlight">Confirm</button>

        </div>
    );
}

export const Issac = () => {
    return(
        <div>
            <p>Issac</p>
        </div>
    );
}

export const Button = (props) => {
    
}