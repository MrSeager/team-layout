//Components
import '../components/style.css';
import MemberSection from "@/components/MemberSection";
//Icons
import { FiArrowUpRight } from "react-icons/fi";

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
    <div className="min-h-screen bg-white flex items-center justify-center">
      <main className="overflow-hidden max-w-300 bg-[url('/images/Background_decor@2x.png')] bg-no-repeat bg-left-top bg-[#F3F4F6] grid grid-rows-2 grid-cols-4 rounded-lg">
        <div className="text-black col-span-2 p-5 order-1">
          <h1 className="text-[#263FA9] text-[16px]">Our team</h1>
          <h2 className="text-[40px] font-semibold">Meet the brain</h2>
          <p className="text-[16px]">We are proud to have them as part of our community and look forward to continuing to push the boundaries of what's possible in the world of digital art.</p>
        </div>
        <MemberSection
          img={'/images/person_1.png'}
          name={'Liam Novak'}
          job={'Software Engeneer'}
          bg={'one'}
          order={2}
        />
        <MemberSection
          img={'/images/person_2.png'}
          name={'Sophia Moretti'}
          job={'Business Development Manager'}
          bg={'two'}
          order={3}
        />
        <div className="p-5 flex flex-col justify-end order-4">
          <a href="#" className="text-black inline-flex items-center hover:text-[#263FA9] duration-250">See all members <FiArrowUpRight size={20} /></a>
        </div>
        <MemberSection
          img={'/images/person_3.png'}
          name={'Ethan Rossi'}
          job={'Business Development Manager'}
          bg={'three'}
          order={5}
        />
        <MemberSection
          img={'/images/person_4.png'}
          name={'Isabella Ricci'}
          job={'UX Designer'}
          bg={'four'}
          order={6}
        />
        <MemberSection
          img={'/images/person_5.png'}
          name={'Noah Conti'}
          job={'Content Creator'}
          bg={'five'}
          order={7}
        />
      </main>
    </div>
  );
}
