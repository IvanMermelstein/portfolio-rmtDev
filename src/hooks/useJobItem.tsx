import { useEffect, useState } from "react";
import { JobItem } from "../lib/types";
import { BASE_API_URL } from "../lib/constants";

const useJobItem = (id: number | null) => {
  const [jobItem, setJobItem] = useState<JobItem | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setJobItem(data);
    };

    fetchData();
  }, [id]);

  return jobItem;
};

export default useJobItem;
