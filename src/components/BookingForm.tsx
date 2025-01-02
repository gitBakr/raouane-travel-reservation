import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import TripTypeStep from "./booking/TripTypeStep";
import PersonalInfoStep from "./booking/PersonalInfoStep";
import ContactStep from "./booking/ContactStep";
import RoomTypeStep from "./booking/RoomTypeStep";
import { BookingFormData } from "./booking/types";

const formSchema = z.object({
  tripType: z.enum(["hajj", "omra"], {
    required_error: "Veuillez sélectionner un type de voyage",
  }),
  civility: z.enum(["mr", "mme", "mlle"], {
    required_error: "Veuillez sélectionner une civilité",
  }),
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  nationality: z.string().min(2, "Veuillez indiquer votre nationalité"),
  roomType: z.enum(["4", "3", "2"], {
    required_error: "Veuillez sélectionner un type de chambre",
  }),
});

const steps = [
  { title: "Type de voyage", component: TripTypeStep },
  { title: "Informations personnelles", component: PersonalInfoStep },
  { title: "Contact", component: ContactStep },
  { title: "Hébergement", component: RoomTypeStep },
];

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Réservation envoyée avec succès!");
  };

  const next = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields);
    
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const previous = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const getFieldsForStep = (step: number): (keyof BookingFormData)[] => {
    switch (step) {
      case 0:
        return ["tripType"];
      case 1:
        return ["civility", "firstName", "lastName", "nationality"];
      case 2:
        return ["email", "phone"];
      case 3:
        return ["roomType"];
      default:
        return [];
    }
  };

  const CurrentStepComponent = steps[currentStep].component;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C]">
            Réservation de voyage
          </h2>
          <Progress value={progress} className="w-full" />
          <p className="text-center text-sm text-gray-500">
            Étape {currentStep + 1} sur {steps.length}: {steps[currentStep].title}
          </p>
        </div>

        <CurrentStepComponent form={form} />

        <div className="flex justify-between gap-4 mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={previous}
            disabled={currentStep === 0}
          >
            Précédent
          </Button>
          
          {currentStep === steps.length - 1 ? (
            <Button 
              type="submit" 
              className="bg-[#1A1F2C] hover:bg-[#2C3E50] transition-colors"
            >
              Réserver
            </Button>
          ) : (
            <Button 
              type="button"
              onClick={next}
              className="bg-[#1A1F2C] hover:bg-[#2C3E50] transition-colors"
            >
              Suivant
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;