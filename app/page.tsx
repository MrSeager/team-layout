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
    <div className="p-3 select-none min-h-screen bg-white flex items-center justify-center">
      <main className="
                    overflow-hidden rounded-[30] max-w-[1200px] bg-[url('/images/Background_decor@2x.png')] bg-no-repeat bg-left-top bg-[#F3F4F6] 
                    grid 
                    grid-rows-7 grid-cols-1
                    md:grid-rows-4 md:grid-cols-2
                    lg:grid-rows-2 lg:grid-cols-4
                  ">
        <div className="
                    text-black col-span-1 md:col-span-2 py-10 order-1
                    px-[24px] lg:pe-[80px]">
          <h1 className="text-[#263FA9] text-[16px]">Our team</h1>
          <h2 className="text-[40px] font-semibold hover:text-[#263FA9] duration-250">Meet the brain</h2>
          <p className="text-[16px] hover:text-[#263FA9] duration-250">We are proud to have them as part of our community and look forward to continuing to push the boundaries of what's possible in the world of digital art.</p>
        </div>
        <MemberSection
          img='/images/person_1.png'
          name='Liam Novak'
          job='Software Engeneer'
          bg='one'
          order='order-2'
        />
        <MemberSection
          img='/images/person_2.png'
          name='Sophia Moretti'
          job='Business Development Manager'
          bg='two'
          order='order-3'
        />
        <div className="aspect-square px-6 py-10 flex flex-col justify-end order-7 lg:order-4">
          <a href="#" className="font-semibold text-black inline-flex items-center hover:text-[#263FA9] duration-250">See all members <FiArrowUpRight size={20} /></a>
        </div>
        <MemberSection
          img='/images/person_3.png'
          name='Ethan Rossi'
          job='Business Development Manager'
          bg='three'
          order='order-4 lg:order-5'
        />
        <MemberSection
          img='/images/person_4.png'
          name='Isabella Ricci'
          job='UX Designer'
          bg='four'
          order='order-5 lg:order-6'
        />
        <MemberSection
          img='/images/person_5.png'
          name='Noah Conti'
          job='Content Creator'
          bg='five'
          order='order-6 lg:order-7'
        />
      </main>
    </div>
  );
}
