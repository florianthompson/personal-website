import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-sprout",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sprout — Screen-free play ideas your toddler will love",
  description:
    "56 educator-curated activities for ages 1–8 — with step-by-step guides, materials lists, and a community of moms to inspire you.",
};

export default function SproutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fraunces.variable} ${dmSans.variable}`}>{children}</div>
  );
}
