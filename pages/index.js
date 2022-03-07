import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import SearchForm from "./components/SearchForm";
import LoadingFull from "./components/LoadingFull";
import styles from "./index.module.scss";

export default function Index() {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const searchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/getUserTikTok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: searchValue }),
      });

      const result = await response.json();
      setUserData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <UserInfo userData={userData} />
      <SearchForm searchUser={searchUser} setSearchValue={setSearchValue} />

      <LoadingFull loading={loading} />
    </div>
  );
}
