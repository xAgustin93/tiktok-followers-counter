import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./SearchForm.module.scss";

export function SearchForm(props) {
  const { searchUser, setSearchValue } = props;

  const onSearch = (e) => {
    e.preventDefault();
    searchUser();
  };

  return (
    <div className={styles.content}>
      <form onSubmit={onSearch}>
        <TextField
          label="Nombre del usuario"
          focused
          className={styles.input}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type="submit" variant="outlined">
          BUSCAR
        </Button>
      </form>
    </div>
  );
}
