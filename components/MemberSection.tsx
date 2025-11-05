import Image from "next/image";

interface MemberSectionProps {
    img: string;
    name: string;
    job: string;
    bg: string;
    order: number;
}

export default function MemberSection({ img, name, job, bg, order }: MemberSectionProps) {
    return(
        <div 
            className={`relative bg-${bg} aspect-square p-5 flex flex-col justify-end order-${order}`}   
        >
            <Image 
                src={img}
                alt={name}
                fill
                className="object-cover z-0"
                priority 
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent z-0" />
            <h2 className="z-10 text-[20px] font-semibold">{name}</h2>
            <h3 className="text-[16px] z-10">{job}</h3>
        </div>
    );
}