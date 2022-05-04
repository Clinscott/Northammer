import ReactPlayer from "react-player";
import utilStyles from "../styles/utils.module.css";

export default function VideoPlayer(props) {
  return (
    <div className={utilStyles.videoWrapper}>
      <h4>{props.title}</h4>
      <ReactPlayer
        className={utilStyles.reactPlayer}
        width="100%"
        url={props.src}
      />
    </div>
  );
}
