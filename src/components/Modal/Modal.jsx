import './Modal.css';

function Modal(props){
    let {isOpen, setIsOpen,titre,texte} = props;
  
    const modal =  document.querySelector('.modal');
    let style = {};

    let classModalStart="modal--startTop";
    if(props.hasOwnProperty("animationFrom")){
        switch(props.animationFrom) {
            case  "TOP" :
                classModalStart = "modal--startTop"
                break;
            case "BOTTOM" :
                classModalStart = "modal--startBottom";
                break;
            case "RIGHT" :
                classModalStart = "modal--startRight";
                break;
            case "LEFT" :
                classModalStart = "modal--startLeft";
                break;
            default :
            classModalStart = "modal--startTop";
        }
    }
    let typeModal="default";
    if(props.hasOwnProperty("type")){
        if(props.type == "SUCCESS")
            typeModal="success";
        else if(props.type == "ERROR")
            typeModal="error";
    }
    style.transition = props.animation ?   "0.3s all ease-in-out" : ""
    const showHideClassName = isOpen ? "modal modal--open" : `modal ${classModalStart}`;
    const showHideOverlay = isOpen ? "overlay display-block" : "overly display-none";
    return(
        <>
            {/* Close modal by outside click */}
            <div className={showHideOverlay} onClick={() =>{setIsOpen(false)
            }} >
            </div>
            <div className={showHideClassName} style={style}>
                <button className={`modal__close ${typeModal}`} onClick={() =>{setIsOpen(false)}}>
                    X
                </button>
                <div className={`modal__header  ${typeModal}`}>
                    <h2 className="modal__header__title">{titre}</h2>
                </div>
                <div className="modal__body">
                    
                    <p>{texte}</p>
                </div>
                <div className="modal__footer">
                    <button className={`modal__footer__button ${typeModal}`} onClick={() =>{ 
                    setIsOpen(false)}}>
                        close
                    </button>
                </div>
            </div>
        </>
    )
}
export default Modal;