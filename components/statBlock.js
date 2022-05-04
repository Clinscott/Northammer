import utilStyles from "../styles/utils.module.css";

export default function StatBlock(props) {
  return (
    <div className={utilStyles.rowS}>
      <p>M: {props.move}</p>
      <p>WS: {props.ws}</p>
      <p>BS: {props.bs}</p>
      <p>S: {props.str}</p>
      <p>T: {props.tough}</p>
      <p>W: {props.wounds}</p>
      <p>A: {props.attacks}</p>
      <p>Ld: {props.leadership}</p>
      <p>Save: {props.save}</p>
    </div>
  );
}
