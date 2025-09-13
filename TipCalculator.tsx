import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

type Country = 'USA' | 'Germany' | 'India' | 'Bangladesh';

interface TipCalculatorProps {
  country: Country;
}

const tipRates = {
  USA: 17.5,
  Germany: 7.5,
  India: 5,
  Bangladesh: 5
};

export default function TipCalculator({ country }: TipCalculatorProps) {
  const [billAmount, setBillAmount] = useState<string>('');
  const [result, setResult] = useState<{ tip: number; total: number } | null>(null);

  const calculateTip = () => {
    const amount = parseFloat(billAmount);
    if (isNaN(amount) || amount <= 0) {
      console.log('Invalid bill amount');
      return;
    }

    const tipRate = tipRates[country];
    const tip = (amount * tipRate) / 100;
    const total = amount + tip;

    setResult({ tip, total });
    console.log(`Calculated tip for ${country}: $${tip.toFixed(2)}, Total: $${total.toFixed(2)}`);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Tip Calculator - {country} ({tipRates[country]}%)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="bill-amount" className="text-sm font-medium text-foreground">
            Bill Amount
          </label>
          <Input
            id="bill-amount"
            data-testid="input-bill-amount"
            type="number"
            placeholder="Enter bill amount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        
        <Button 
          onClick={calculateTip}
          data-testid="button-calculate"
          className="w-full"
          disabled={!billAmount || parseFloat(billAmount) <= 0}
        >
          Calculate Tip
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-chart-1/10 border border-chart-1/20 rounded-lg">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Bill Amount:</span>
                <span className="font-medium" data-testid="text-bill-amount">
                  ${parseFloat(billAmount).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Tip ({tipRates[country]}%):</span>
                <span className="font-medium text-chart-1" data-testid="text-tip-amount">
                  ${result.tip.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold text-lg" data-testid="text-total-amount">
                  ${result.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}