// export default function ({ children }: { children: React.ReactNode }) {
//     return (
//       <html lang="en">
//         <div className="p-4 text-center">20 % off on all courses</div>
//         {children}
//       </html>
//     );
//   }

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-4 text-center">20% off on all courses</div>
      {children}
    </>
  );
}
