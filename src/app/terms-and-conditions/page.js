import TermsAndCondition from "@/components/CMS/TermsAndCondition";

export async function generateMetadata({ params }) {
  return {
    title: 'Terms And Conditions | Washton',
  };
}

export default async function TermsAndConditionsPage() {
  return (
    <>
      <TermsAndCondition />
    </>
  );
}
