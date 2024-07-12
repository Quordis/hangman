import Man from './men'

export default function Hangman(props: any) {
    return (
        <div className="stage">
            <div className="top"></div>
            <div className="middleLong"></div>
            <div className="middleShort"></div>
            <div className="bottom"></div>
            <Man />
        </div>
    )
}