import './Modal.css';

function Modal({isOpen, setIsOpen,animation,animationFrom}){
    const modal =  document.querySelector('.modal');
    //const overlay =  document.querySelector('.overlay');
   
    let style = {};
    let classModalStart="";

    switch(animationFrom) {
        case  "TOP" :
            // style.transform = " translate(-50%,-100vw)";
            classModalStart = "modal--startTop"
            break;
        case "BOTTOM" :
            //style.transform = " translate(-50%,100vw)";
            classModalStart = "modal--startBottom";
            break;
        case "RIGHT" :
               //style.transform = " translate(-50%,-50%)";
               classModalStart = "modal--startRight";
            break;
        case "LEFT" :
               //style.transform = " translate(-200%,-50%)";
               classModalStart = "modal--startLeft";
            break;
        default :
        classModalStart = "modal--startTop";
    }
    style.transition = animation ?   "0.3s all ease-in-out" : ""
    const showHideClassName = isOpen ? "modal modal--open" : `modal ${classModalStart}`;
    const showHideOverlay = isOpen ? "overlay display-block" : "overly display-none";
    return(
        <>
            {/* Close modal by outside click */}
            <div className={showHideOverlay} onClick={() =>{setIsOpen(false)
            // document.querySelector('.modal').classList.remove("modal--open");
            }} >
            </div>
            <div className={showHideClassName} style={style}>
                <button className="modal__close" onClick={() =>{setIsOpen(false)}}>
                    X
                </button>
                <div className="modal__header">
                    <h2 className="modal__header__title">Titre de la fenetre</h2>
                </div>
                <div className="modal__body">
                    <p>Utilisateur ajouté avec succès!</p>
                </div>
                <div className="modal__footer">
                    <button className="modal__footer__button" onClick={() =>{ 
                    // document.querySelector('.modal').classList.remove("modal--open");
                    //overlay.style.display = "none";
                    setIsOpen(false)}}>
                        close
                    </button>
                </div>
            </div>
        </>
        
           
       
    )
}
export default Modal;