export type BookingFormData = {
  tripType: "hajj" | "omra";
  civility: "mr" | "mme" | "mlle";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  roomType: "4" | "3" | "2";
};