export interface BreadcrumbItem {
  label: string;
  href?: string;
}
export const breadcrumbConfig: Record<string, BreadcrumbItem[]> = {
  "/farmer-portal": [
    {
      label: "Farmer Portal",
    },
  ],

  "/farmer-portal/AI-insight": [
    {
      label: "Farmer Portal",
      href: "/farmer-portal",
    },
    {
      label: "AI Insight",
    },
  ],

  "/farmer-portal/AI-insight/forecastReport": [
    {
      label: "Farmer Portal",
      href: "/farmer-portal",
    },
    {
      label: "AI Insight",
      href: "/farmer-portal/AI-insight",
    },
    {
      label: "AI Forecast",
    },
  ],

  "/farmer-portal/lahan": [
    {
      label: "Farmer Portal",
      href: "/farmer-portal",
    },
    {
      label: "Lahan",
    },
  ],
};
