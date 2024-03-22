import ImageIcon from "@/assets/img/image.svg";
import Image from "next/image";

export default function BlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-10 w-52 bg-gray-400 rounded-sm mb-10"></div>
      {Array.from({ length: 30 }, (_, i) => {
        const randomWidth = Math.floor(Math.random() * (100 - 50) + 50);
        return randomWidth === 50 ? (
          <div className="flex items-center justify-center w-96 h-48 bg-gray-400 rounded mb-5">
            <Image src={ImageIcon} alt="image" width={50} height={50} />
          </div>
        ) : (
          <div
            key={i}
            style={{ width: `${randomWidth}%` }}
            className="h-3 bg-gray-400 rounded-sm mb-5"
          ></div>
        );
      })}
    </div>
  );
}
