import { Input } from "@/components/ui/input";
import { Scale } from "lucide-react";

interface WeightInputProps {
  weight: string;
  onWeightChange: (weight: string) => void;
}

export default function WeightInput({ weight, onWeightChange }: WeightInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="weight-input" className="text-sm font-medium text-foreground flex items-center gap-2">
        <Scale className="w-4 h-4" />
        Body Weight (kg)
      </label>
      <Input
        id="weight-input"
        data-testid="input-weight"
        type="number"
        placeholder="Enter weight in kg"
        value={weight}
        onChange={(e) => onWeightChange(e.target.value)}
        min="0.1"
        step="0.1"
        className="w-full"
      />
    </div>
  );
}