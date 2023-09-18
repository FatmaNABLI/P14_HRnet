import './Modal.css';

function Modal(props){
    let {isOpen, setIsOpen} = props;
  
    const modal =  document.querySelector('.modal');
    let titre = props.hasOwnProperty("titre")?props.titre:"Mon titre";
    let texte = props.hasOwnProperty("titre")?props.texte:"Utiliser la prop texte pour personaliser votre texte";
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
    Object.assign(style,props.containerStyle)
  
    const showHideClassName = isOpen ? "modal modal--open" : `modal ${classModalStart}`;
    const showHideOverlay = isOpen ? "overlay display-block" : "overly display-none";
    let icone = true;
    if(props.hasOwnProperty("icone")){
        icone = props.icone;
    }
    let textStyle = props.hasOwnProperty("textStyle")? props.textStyle : {}
    let bgColor = props.hasOwnProperty("bgColor") ? props.bgColor : null
    return(
        <>
            {/* Close modal by outside click */}
            <div className={showHideOverlay} onClick={() =>{setIsOpen(false)
            }} >
            </div>
            <div className={showHideClassName} style={style}>
                <button style = {{backgroundColor : bgColor}} className={`modal__close ${typeModal}`} onClick={() =>{setIsOpen(false)}}>
                    X
                </button>
                <div style = {{backgroundColor : bgColor}}className={`modal__header  ${typeModal}`}>
                    <h2 className="modal__header__title">{titre}</h2>
                </div>
                <div className="modal__body">
                    {typeModal=="success" && icone && <svg className= "success-icone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                        </svg>}
                    
                    {typeModal=="error"&& icone && <svg className= "error-icone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                        </svg>}
                    <p style={textStyle}>{texte}</p>
                </div>
                <div className="modal__footer">
                    <button style = {{backgroundColor : bgColor}} className={`modal__footer__button ${typeModal}`} onClick={() =>{ 
                    setIsOpen(false)}}>
                        close
                    </button>
                </div>
            </div>
        </>
    )
}
export default Modal;