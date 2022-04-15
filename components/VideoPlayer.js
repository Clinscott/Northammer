import ReactPlayer from "react-player";
import utilStyles from "../styles/utils.module.css"

export default function VideoPlayer(props){
    return (
        <div className={utilStyles.video}>
            <h4>{props.title}</h4>
            <ReactPlayer
                url={props.src}
                />
        </div>
    )
}