import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { BookingFormData } from "./types";

interface PersonalInfoStepProps {
  form: UseFormReturn<BookingFormData>;
}

const PersonalInfoStep = ({ form }: PersonalInfoStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Informations Personnelles</h3>
      
      <FormField
        control={form.control}
        name="civility"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Civilité</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Sélectionnez votre civilité" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="mr">M.</SelectItem>
                <SelectItem value="mme">Mme</SelectItem>
                <SelectItem value="mlle">Mlle</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Votre prénom" className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom" className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="nationality"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nationalité</FormLabel>
            <FormControl>
              <Input placeholder="Votre nationalité" className="bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default PersonalInfoStep;