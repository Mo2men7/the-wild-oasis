import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCobins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins, // not getCabins()
  });
  return { isLoading, error, cabins };
}
