import PrivacyPolicy from "@/components/CMS/PrivacyPolicy";

export async function generateMetadata({ params }) {
  return {
    title: 'Privacy Policy | Washton',
  };
}

export default async function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
