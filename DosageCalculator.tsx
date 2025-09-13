import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, AlertTriangle } from "lucide-react";
import { Medicine } from './MedicineSelector';

interface DosageCalculatorProps {
  medicine: Medicine;
  weight: string;
}

interface DosageResult {
  minDosage: number;
  maxDosage: number;
  weight: number;
}

export default function DosageCalculator({ medicine, weight }: DosageCalculatorProps) {
  const weightNum = parseFloat(weight);
  
  const calculateDosage = (): DosageResult | null => {
    if (isNaN(weightNum) || weightNum <= 0) return null;
    
    const minDosage = medicine.minDose ? medicine.minDose * weightNum : 0;
    const maxDosage = medicine.maxDose ? medicine.maxDose * weightNum : minDosage;
    
    return {
      minDosage,
      maxDosage,
      weight: weightNum
    };
  };

  const result = calculateDosage();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Dosage Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Medicine Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground" data-testid="text-medicine-name">
            {medicine.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            <strong>Use:</strong> {medicine.use}
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Standard Dosage:</strong> {medicine.dosage}
          </p>
        </div>

        {/* Dosage Calculation */}
        {result ? (
          <div className="space-y-3">
            <div className="p-4 bg-chart-1/10 border border-chart-1/20 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Patient Weight:</span>
                  <span className="font-medium" data-testid="text-patient-weight">
                    {result.weight} kg
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Calculated Dosage:</span>
                  <span className="font-semibold text-chart-1" data-testid="text-calculated-dosage">
                    {result.minDosage === result.maxDosage 
                      ? `${result.minDosage.toFixed(1)} mg`
                      : `${result.minDosage.toFixed(1)} - ${result.maxDosage.toFixed(1)} mg`
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Frequency Information */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h4 className="font-medium mb-2">Frequency & Instructions</h4>
              <p className="text-sm text-muted-foreground" data-testid="text-frequency">
                {medicine.frequency}
              </p>
            </div>

            {/* Warning */}
            <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <h4 className="font-medium text-destructive">Important Warning</h4>
                <p className="text-sm text-muted-foreground">
                  This is for reference only. Always consult a healthcare provider before taking any medication. 
                  Dosages may vary based on individual factors, medical history, and specific conditions.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-muted-foreground">
              Enter a valid weight to calculate dosage
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}