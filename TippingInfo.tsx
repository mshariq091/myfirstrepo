import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

type Country = 'USA' | 'Germany' | 'Japan' | 'India' | 'Bangladesh';

interface TippingInfoProps {
  country: Country;
}

const tippingInfo = {
  USA: {
    title: "Tipping in the United States",
    content: "Tipping is customary and expected in most service situations. Standard rates range from 15-20% for restaurants, with 17.5% being a common average. Tips are a significant part of service workers' income."
  },
  Germany: {
    title: "Tipping in Germany",
    content: "Tipping (called 'Trinkgeld') is common but more modest than in the US. Rounding up or adding 5-10% is typical for good service. 7.5% is a reasonable average for restaurants and cafes."
  },
  Japan: {
    title: "Tipping in Japan",
    content: "Tipping is not customary and can even be considered rude or confusing. Excellent service is expected as standard, and prices already reflect fair compensation. Simply saying 'thank you' is the appropriate way to show appreciation."
  },
  India: {
    title: "Tipping in India",
    content: "Tipping is appreciated but not always expected. In restaurants, 5% is considered reasonable for good service. Tipping is more common in upscale establishments and tourist areas. Small tips for service staff like hotel porters and taxi drivers are also appreciated."
  },
  Bangladesh: {
    title: "Tipping in Bangladesh",
    content: "Tipping is not mandatory but is appreciated for good service. In restaurants and hotels, 5% is a reasonable amount if you're satisfied with the service. Tipping is more common in higher-end establishments and among international visitors."
  }
};

export default function TippingInfo({ country }: TippingInfoProps) {
  const info = tippingInfo[country];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="w-5 h-5" />
          {info.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-info-${country.toLowerCase()}`}>
          {info.content}
        </p>
      </CardContent>
    </Card>
  );
}