import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { BookingFormData } from "./types";

interface RoomTypeStepProps {
  form: UseFormReturn<BookingFormData>;
}

const RoomTypeStep = ({ form }: RoomTypeStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Type d'Hébergement</h3>
      
      <FormField
        control={form.control}
        name="roomType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type d'hébergement</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Sélectionnez le type de chambre" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="4">Chambre 4 personnes</SelectItem>
                <SelectItem value="3">Chambre 3 personnes</SelectItem>
                <SelectItem value="2">Chambre 2 personnes</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default RoomTypeStep;