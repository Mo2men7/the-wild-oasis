import { useParams } from "react-router-dom";
import CheckinBooking from "../features/check-in-out/CheckinBooking";

function Checkin() {
  const { bookingId } = useParams();
  return <CheckinBooking />;
}

export default Checkin;
