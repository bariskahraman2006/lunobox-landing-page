import Image from "next/image";

interface ProductCardProps {
  title: string;
  ageRange?: string; // Örn: "3 - 5 Years"
  image: string;
  onPreview?: () => void; // Preview butonuna tıklandığında çalışacak fonksiyon
}

export const ProductCard = ({
  title,
  ageRange = "3 - 5 Years",
  image,
  onPreview,
}: ProductCardProps) => {
  return (
    <div className="w-full max-w-[302px] bg-white rounded-[24px] p-[16px] flex flex-col gap-[16px] shadow-sm border border-gray-100">
      {/* Kart Görseli (Üst Kısım) */}
      <div className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden bg-bg-2">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 302px"
        />
      </div>

      {/* Kart İçeriği (Alt Kısım) */}
      <div className="flex flex-col gap-[12px] items-start">
        {/* Başlık */}
        <h3 className="text-h4 text-text-main line-clamp-2">{title}</h3>

        {/* Yaş Etiketi (Hap/Pill şeklinde) */}
        <span className="inline-flex items-center justify-center bg-accent-3 text-white px-[12px] py-[4px] rounded-full font-nunito font-bold text-[14px]">
          {ageRange}
        </span>

        {/* Önizleme (Preview) Butonu */}
        <button
          onClick={onPreview}
          className="w-full mt-[4px] flex items-center justify-start gap-[10px] bg-bg-2 text-main px-[16px] py-[12px] rounded-[20px] font-nunito font-extrabold text-[16px] hover:bg-[#C5E1F3] transition-colors active:ring-[1px] active:ring-inset active:ring-main"
        >
          {/* Ses İkonu (SVG) */}
          <div className="w-[24px] h-[24px] flex items-center justify-center bg-main text-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          </div>
          Preview
        </button>
      </div>
    </div>
  );
};