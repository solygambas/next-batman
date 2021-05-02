import { useEffect, useContext, useState } from "react";

import AuthContext from "../stores/authContext";
import styles from "../styles/Guides.module.css";
import capitalize from "../utils/capitalize";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guides",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("You must be logged in to view this content");
          }
          return res.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);
  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
      {guides &&
        guides.map((guide) => (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>Written by {capitalize(guide.author)}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quae voluptas dolorem. Iusto repellendus ipsum ex nobis? Enim
              corrupti quod quibusdam a magni eos odio incidunt, dolorum at
              quidem labore numquam qui impedit esse exercitationem nihil fugiat
              rem in hic harum sed assumenda! Necessitatibus, id voluptatem.
              Eaque voluptate suscipit voluptatibus!
            </p>
          </div>
        ))}
    </div>
  );
}
