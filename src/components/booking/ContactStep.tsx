import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { BookingFormData } from "./types";

interface ContactStepProps {
  form: UseFormReturn<BookingFormData>;
}

const ContactStep = ({ form }: ContactStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Coordonnées</h3>
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="votre@email.com" className="bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Téléphone</FormLabel>
            <FormControl>
              <Input type="tel" placeholder="Votre numéro de téléphone" className="bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ContactStep;