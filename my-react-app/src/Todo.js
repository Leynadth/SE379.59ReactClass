import { Modal } from "./modal";
import {useState} from "react";


const Todo = () => {
    const [ShowModal, setShowModal ] = useState(false);

    const onDissmissModal = () => {
        setShowModal(false);
    };

    return (
    <>
    <div class="card-content">
        <h2>Learn React</h2>
        <button onClick={() => { setShowModal(true) }} className="btn">Done</button>
    </div>
    <br></br>
    <div class="card-content">
        <h2>i am React</h2>
        <button onClick={() => { setShowModal(true) }} className="btn">Done</button>
    </div>
    <br></br>
    <div class="card-content">
        <h2>Click for Mario</h2>
        <button onClick={() => { setShowModal(true) }} className="btn">Done</button>
    </div>
    {ShowModal && 
        <div id="first-child">
            <div id="second-child">
                <div id="third-child">
                    <div id="fourth-child">
                        <Modal dismissModal = {onDissmissModal}></Modal>
                    </div>
                </div>
            </div>
        </div>

    }
    </>
    );
}

export default Todo;