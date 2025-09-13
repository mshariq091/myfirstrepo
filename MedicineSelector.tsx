import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface Medicine {
  name: string;
  use: string;
  dosage: string;
  frequency: string;
  minDose?: number;
  maxDose?: number;
}

interface MedicineSelectorProps {
  selectedMedicine: Medicine | null;
  onMedicineSelect: (medicine: Medicine) => void;
  medicines: Medicine[];
}

export default function MedicineSelector({ selectedMedicine, onMedicineSelect, medicines }: MedicineSelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="medicine-select" className="text-sm font-medium text-foreground">
        Select Medicine
      </label>
      <Select
        value={selectedMedicine?.name || undefined}
        onValueChange={(value) => {
          const medicine = medicines.find(m => m.name === value);
          if (medicine) onMedicineSelect(medicine);
        }}
      >
        <SelectTrigger 
          id="medicine-select"
          data-testid="select-medicine"
          className="w-full"
        >
          <SelectValue placeholder="Choose a medicine..." />
        </SelectTrigger>
        <SelectContent className="max-h-60">
          {medicines.map((medicine) => (
            <SelectItem 
              key={medicine.name} 
              value={medicine.name}
              data-testid={`option-${medicine.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className="flex flex-col">
                <span className="font-medium">{medicine.name}</span>
                <span className="text-xs text-muted-foreground">{medicine.use}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}