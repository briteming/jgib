export default function BlogListSkeleton() {
  return (
    <div className="animate-pulse">
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <div key={i} className="border-b-2 px-3 py-5">
            <div className="w-52 h-5 bg-gray-400 rounded-sm mb-10"></div>
            {Array.from({ length: 5 }, (_, j) => {
              const randomWidth = Math.floor(Math.random() * (100 - 50) + 50);
              return (
                <div
                  key={`${i}-${j}`}
                  style={{ width: `${randomWidth}%` }}
                  className="h-3 bg-gray-400 rounded-sm mb-5"
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
