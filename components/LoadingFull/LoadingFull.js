import React from "react";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import styles from "./LoadingFull.module.scss";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export function LoadingFull(props) {
  const { loading } = props;

  if (!loading) return null;

  return (
    <div className={styles.content}>
      <BeatLoader color="#2185d0" loading={true} css={override} size={100} />
      <span>Buscado usuario</span>
    </div>
  );
}
