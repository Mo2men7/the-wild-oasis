import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : // : { field: "status", value: filterValue, method: "gte" };
        { field: "status", value: filterValue };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter], // we pass also the filter object so that the output will depend on it like useEffect
    queryFn: () => getBookings({ filter }),
  });
  return { isLoading, bookings, error };
}
