import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    //using the data that comes from the mutation function
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
      //invalidate all the query that currently active on the page
    },
    onError: () => {
      toast.error("An error occured while checking out");
    },
  });
  return { isCheckingOut, checkout };
}
