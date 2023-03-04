export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="2xl:mx-[500px] xl:mx-[150px] lg:mx-[100px] md:mx-[50px] sm:mx-[10px] max-sm:mx-[15px]">
      {children}
    </div>
  );
}
