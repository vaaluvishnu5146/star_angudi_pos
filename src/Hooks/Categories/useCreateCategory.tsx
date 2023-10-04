import { useState, useEffect } from "react";
import { CategoryT } from "../../Interfaces/Components";

const url = "http://localhost:5000/api/categories/create";

export default function useCreateCategory(): [
  createCategory: (category: CategoryT) => void,
  error: boolean,
  success: boolean,
  fetching: boolean
] {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fetching, setFetching] = useState(false);

  const createCategory = (category: CategoryT) => {
    setFetching(true);
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(category), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setSuccess(true);
          setFetching(false);
        } else {
          setError(true);
          setFetching(false);
        }
      })
      .catch((error) => {
        setError(true);
        setFetching(false);
      });
  };
  return [createCategory, error, success, fetching];
}
