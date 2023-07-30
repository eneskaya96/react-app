import { useParams } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { useState } from "react";
import Modal from "./Modal";

const NewPage = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <h2>hi! { id } </h2>
            <button onClick={() => setShowModal(true)}> Continue</button>
            {
                showModal ? (
                    <Modal>
                        <div>
                            <h1>Welcome to new MOdal</h1>
                            <div className="buttons">
                            <button>Yes</button>
                            <button onClick={() => setShowModal(false)}>No</button>
                            </div>
                        </div>
                    </Modal>
                ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
            }
        </div>
    );
};

function NewPageErrorBoundary(props) {
return (
    <ErrorBoundary>
    <NewPage {...props} />
    </ErrorBoundary>
);
}
  
export default NewPageErrorBoundary;