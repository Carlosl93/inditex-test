import React, { useEffect } from "react";

import styles from "./styles.module.css";

function Action({ title, options, value, setValue }) {
  useEffect(() => {
    if (options.length === 1) {
      setValue(0);
    }
  }, [setValue, options]);

  return (
    <div className={styles.actionContainer}>
      <h4>{title}</h4>
      <div className={styles.actionOptions}>
        {options &&
          options.map((option, index) => {
            const selectedStyle =
              value === index || options.length === 1
                ? {
                    backgroundColor: "#a7d1a2",
                    border: "1px solid #000",
                  }
                : {};
            return (
              <button
                key={option.name}
                onClick={() => setValue(index)}
                style={selectedStyle}
                className={styles.actionButton}
                type="button"
              >
                {option.name}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default Action;
