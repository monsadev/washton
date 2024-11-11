import FAQ from "@/components/CMS/FAQ";

export async function generateMetadata({ params }) {
  return {
    title: 'Frequently Asked Questions | Washton',
  };
}

export default async function FaqPage() {
  return (
    <>
      <FAQ />
    </>
  );
}
