import { useEffect, useState } from "react";
import { JobItem } from "../lib/types";
import { BASE_API_URL } from "../lib/constants";

const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);

      const data = await response.json();
      setJobItems(data.jobItems);
      setIsLoading(false);
    };

    fetchData();
  }, [searchText]);

  return [jobItemsSliced, isLoading] as const;
};

export default useJobItems;
