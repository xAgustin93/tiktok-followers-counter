import React from "react";
import Image from "next/image";
import logoTinCode from "../../public/tincode-logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.content}>
      <a href="https://tincode.es/" target="_blank" rel="noopener noreferrer">
        <Image src={logoTinCode} width={100} height={40} />
      </a>
      <h1>TikTok Followers Counter</h1>
      <a href="https://tincode.es/" target="_blank" rel="noopener noreferrer">
        Ir a TinCode →
      </a>
    </div>
  );
}
