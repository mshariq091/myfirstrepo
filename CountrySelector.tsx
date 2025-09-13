import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Country = 'USA' | 'Germany' | 'Japan' | 'India' | 'Bangladesh';

interface CountrySelectorProps {
  selectedCountry: Country | null;
  onCountrySelect: (country: Country) => void;
}

export default function CountrySelector({ selectedCountry, onCountrySelect }: CountrySelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="country-select" className="text-sm font-medium text-foreground">
        Select Country
      </label>
      <Select
        value={selectedCountry || undefined}
        onValueChange={(value) => onCountrySelect(value as Country)}
      >
        <SelectTrigger 
          id="country-select"
          data-testid="select-country"
          className="w-full"
        >
          <SelectValue placeholder="Choose a country..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USA" data-testid="option-usa">
            🇺🇸 United States
          </SelectItem>
          <SelectItem value="Germany" data-testid="option-germany">
            🇩🇪 Germany
          </SelectItem>
          <SelectItem value="Japan" data-testid="option-japan">
            🇯🇵 Japan
          </SelectItem>
          <SelectItem value="India" data-testid="option-india">
            🇮🇳 India
          </SelectItem>
          <SelectItem value="Bangladesh" data-testid="option-bangladesh">
            🇧🇩 Bangladesh
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}