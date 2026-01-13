import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Challan Updates & News - Latest Developments | MyChallan.pk",
  description: "Stay updated with latest e-challan news, developments, and updates from Pakistan. Get information about new features, policy changes, and traffic challan system improvements.",
  keywords: "e challan news, traffic challan updates, pakistan challan news, e challan developments, challan system updates",
  alternates: {
    canonical: "https://mychallan.pk/updates",
  },
  openGraph: {
    title: "E-Challan Updates & News - Latest Developments",
    description: "Stay updated with latest e-challan news and developments from Pakistan.",
    url: "https://mychallan.pk/updates",
    siteName: "MyChallan.pk",
    type: "website",
    locale: "en_PK",
  },
};

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
