import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "age",
        accessor: "age"
      },
      {
        Header: "man",
        accessor: "man"
      },
      {
        Header: "woman",
        accessor: "woman"
      },
    ],
    []
  );

  return columns;
}