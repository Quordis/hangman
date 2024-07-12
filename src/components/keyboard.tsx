import { click } from "@testing-library/user-event/dist/click";

export default function Keyboard(props: any) {
    return (
        <div className="keyboard">
            <div className="letter" onClick={props.handleClick}>A</div>
            <div className="letter" onClick={props.handleClick}>B</div>
            <div className="letter" onClick={props.handleClick}>C</div>
            <div className="letter" onClick={props.handleClick}>D</div>
            <div className="letter" onClick={props.handleClick}>E</div>
            <div className="letter" onClick={props.handleClick}>F</div>
            <div className="letter" onClick={props.handleClick}>G</div>
            <div className="letter" onClick={props.handleClick}>H</div>
            <div className="letter" onClick={props.handleClick}>I</div>
            <div className="letter" onClick={props.handleClick}>J</div>
            <div className="letter" onClick={props.handleClick}>K</div>
            <div className="letter" onClick={props.handleClick}>L</div>
            <div className="letter" onClick={props.handleClick}>M</div>
            <div className="letter" onClick={props.handleClick}>N</div>
            <div className="letter" onClick={props.handleClick}>O</div>
            <div className="letter" onClick={props.handleClick}>P</div>
            <div className="letter" onClick={props.handleClick}>R</div>
            <div className="letter" onClick={props.handleClick}>S</div>
            <div className="letter" onClick={props.handleClick}>T</div>
            <div className="letter" onClick={props.handleClick}>U</div>
            <div className="letter" onClick={props.handleClick}>W</div>
            <div className="letter" onClick={props.handleClick}>X</div>
            <div className="letter" onClick={props.handleClick}>Y</div>
            <div className="letter" onClick={props.handleClick}>Z</div>
        </div>
    )
}