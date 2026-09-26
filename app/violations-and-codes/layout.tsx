import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traffic Violations and Codes - E Challan Fines in Pakistan",
  description:
    "Complete list of Pakistan traffic violation codes, English and Urdu descriptions, and fines for Punjab, Islamabad, and Karachi.",
  keywords:
    "traffic violation codes pakistan, e challan fine list, punjab traffic fines, islamabad challan codes, karachi traffic violation fines",
  alternates: {
    canonical: "https://mychallan.pk/violations-and-codes/",
  },
  openGraph: {
    title: "Traffic Violations and Codes - E Challan Fines in Pakistan",
    description:
      "Complete list of Pakistan traffic violation codes, descriptions, and fines for Punjab, Islamabad, and Karachi.",
    url: "https://mychallan.pk/violations-and-codes/",
    siteName: "MyChallan.pk",
    type: "website",
    locale: "en_PK",
  },
};

export default function ViolationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
