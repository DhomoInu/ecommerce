import styles from "../styles/Categories.module.css";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

import React from "react";

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
