import './App.css';
function Display(props){

    return(
        <div id="displayWrapper">
            <div id="formula">{props.output}</div>
            <div id="display">{props.input}</div>
        </div>
    )
}

export default Display;