import React from "react";
import { Avatar } from "@mui/material";
import styles from "./UserInfo.module.scss";
import tinCodeLogo from "../../../public/tincode.png";

export default function UserInfo(props) {
  const { userData } = props;

  return (
    <div className={styles.content}>
      <h2>@{userData.username || "YouName"}</h2>
      <Avatar
        alt={userData.username || "YouName"}
        src={userData.avatar || tinCodeLogo.src}
        className={styles.avatar}
      />
      <h3>{userData.followers || "Seguidores"}</h3>
    </div>
  );
}
