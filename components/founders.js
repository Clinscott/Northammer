import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import StatBlock from "./statBlock";

const profilePic = {
  width: 128,
  height: 128,
};

export default function Founders(props) {
  return (
    <div className={utilStyles.founder}>
      <p className={utilStyles.headingMd}>{props.name}</p>
      <div className={utilStyles.rowC}>
        <Image
          src={props.image}
          className={utilStyles.borderCircle}
          height={profilePic.height}
          width={profilePic.width}
          alt={props.name}
        />
      </div>
      <StatBlock
        move={props.move}
        ws={props.ws}
        bs={props.bs}
        str={props.str}
        tough={props.tough}
        wounds={props.wounds}
        attacks={props.attacks}
        leadership={props.leadership}
        save={props.save}
      />
      <p>{props.description}</p>
    </div>
  );
}
