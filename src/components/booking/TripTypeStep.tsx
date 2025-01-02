import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { BookingFormData } from "./types";

interface TripTypeStepProps {
  form: UseFormReturn<BookingFormData>;
}

const TripTypeStep = ({ form }: TripTypeStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Type de Voyage</h3>
      <FormField
        control={form.control}
        name="tripType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type de voyage</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Sélectionnez le type de voyage" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="hajj">Hajj</SelectItem>
                <SelectItem value="omra">Omra</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TripTypeStep;