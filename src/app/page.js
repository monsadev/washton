import HomePage from "@/components/HomePage/HomePage";
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }) {
  return {
    title: 'Washton | Effortless dry cleaning, delivered to your door.',
  };
}


export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
