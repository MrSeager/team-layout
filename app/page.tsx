import Image from "next/image";
import '../components/style.css';

export const metadata = {
  title: "Meet the Team Section",
  openGraph: {
    title: "Meet the Team Section",
    description: "List of team members.",
    images: [
      {
        url: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/challenges/69/challenge-69-thumbnail",
        width: 1920,
        height: 1080,
        alt: "Meet the Team Section Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Team Section",
    description: "List of team members.",
    images: [
      "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/challenges/69/challenge-69-thumbnail",
    ],
  },
}

export default function Home() {
  return (
    <div className="p-15 min-h-screen bg-main flex items-center justify-center">
      <main className="bg-[url('/images/Background_decor@2x.png')] bg-no-repeat bg-left-top bg-second grid grid-rows-2 grid-cols-4 rounded-lg">
        <div className="text-black col-span-2 p-5">
          <h1 className="text-color-blue text-[15px]">Our team</h1>
          <h2 className="text-[45px] font-bold">Meet the brain</h2>
          <p className="">We are proud to have them as part of our community and look forward to continuing to push the boundaries of what's possible in the world of digital art.</p>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </main>
    </div>
  );
}
