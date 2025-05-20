// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-3">
        <div className="h-6 w-28 rounded-md bg-gray-200" />
      </div>
      <div>
        <div className="ml-4 h-4 w-20 mb-3 rounded-md bg-gray-200 text-sm font-extralight" />
        <div className="ml-4 h-6 w-32 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex p-4">
        <div className="absolute top-[88px] right-[18px] h-12 w-16 rounded-md bg-white" />
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-8 h-8 w-44 overflow-hidden rounded-md bg-gray-200`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 flex gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
      </div>
    </>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div
      className={`${shimmer} relative w-full m-8 pt-4 overflow-hidden md:col-span-4`}
    >
      <div className="rounded-xl bg-gray-100 p-2">
        <div className="flex w-full h-[400px] rounded-md bg-white ">
          <div className="mt-5 ml-4 h-5 w-44 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function ICSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="rounded-xl bg-gray-200 p-1">
        <div className="flex w-full rounded-md bg-white">
          <div className="mt-3 ml-2 h-6 w-32 rounded-md bg-gray-200" />
          <div className="mt-3 ml-24 h-6 w-16 rounded-md bg-gray-200" />
          <div className="mt-3 ml-72 h-6 w-28 rounded-md bg-gray-200" />
          <div className="mt-3 ml-24 h-6 w-20 rounded-md bg-gray-200" />
          <div className="mt-3 ml-36 h-6 w-24 rounded-md bg-gray-200" />
        </div>
        <div className="w-full bg-white ">
          {[...Array(6)].map((placeholder, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-4"
            >
              <div className="ml-24 mt-3 h-4 w-6 bg-gray-200 rounded" />
              <div className="ml-4 mt-3 h-4 w-56 bg-gray-200 rounded" />
              <div className="ml-20 mt-3 h-4 w-20 bg-gray-200 rounded" />
              <div className="mt-3 mr-18 h-4 w-32 bg-gray-200 rounded" />
              <div className="mr-24 mt-3 h-4 w-8 bg-gray-200 rounded" />
              <div className="mr-8 h-8 w-14 bg-gray-200 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TransactionSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="rounded-xl bg-gray-200 p-1">
        <div className="flex w-full rounded-md bg-white">
          <div className="mt-3 ml-4 h-6 w-40 rounded-md bg-gray-200" />
          <div className="mt-3 ml-20 h-6 w-16 rounded-md bg-gray-200" />
          <div className="mt-3 ml-56 h-6 w-28 rounded-md bg-gray-200" />
          <div className="mt-3 ml-16 h-6 w-12 rounded-md bg-gray-200" />
          <div className="mt-3 ml-32 h-6 w-24 rounded-md bg-gray-200" />
          <div className="mt-3 ml-20 h-6 w-16 rounded-md bg-gray-200" />
        </div>
        <div className="w-full rounded-md bg-white ">
          {[...Array(10)].map((placeholder, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3.5"
            >
              <div className="ml-4 mt-2 h-4 w-12 bg-gray-200 rounded" />
              <div className="ml-36 mt-3 h-4 w-52 bg-gray-200 rounded" />
              <div className="ml-16 mt-2 h-4 w-4 bg-gray-200 rounded" />
              <div className="ml-36 mt-2 h-4 w-28 bg-gray-200 rounded" />
              <div className="ml-28 mt-2 mr-18 h-4 w-4 bg-gray-200 rounded" />
              <div className="mr-12 ml-16 mt-2 h-4 w-24 bg-gray-200 rounded" />
              <div className="mr-8 h-8 w-20 bg-gray-200 rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export function RevenueChartSkeleton() {
//   const fakeRows = Array.from({ length: 5 });

//   return (
//     <div className="overflow-x-auto w-full">
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead className="bg-gray-100">
//           <tr className="text-left text-2xl">
//             <th className="py-3 px-4 border-b">ID Product</th>
//             <th className="py-3 px-4 border-b">Name</th>
//             <th className="py-3 px-4 border-b">Category</th>
//             <th className="py-3 px-4 border-b">Pricing</th>
//             <th className="py-3 px-4 border-b">In Stock</th>
//             <th className="py-3 px-4 border-b"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {fakeRows.map((_, rowIndex) => (
//             <tr key={rowIndex} className="border-t">
//               <td className="py-3 px-4 text-center">
//                 <div className={`${shimmer} h-6 w-24 rounded-md bg-gray-200`} />
//               </td>
//               <td className="py-3 px-4">
//                 <div className={`${shimmer} h-6 w-40 rounded-md bg-gray-200`} />
//               </td>
//               <td className="py-3 px-4 text-center">
//                 <div className={`${shimmer} h-6 w-28 rounded-md bg-gray-200`} />
//               </td>
//               <td className="py-3 px-4">
//                 <div className={`${shimmer} h-6 w-28 rounded-md bg-gray-200`} />
//               </td>
//               <td className="py-3 px-4">
//                 <div className={`${shimmer} h-6 w-20 rounded-md bg-gray-200`} />
//               </td>
//               <td className="py-3 px-4 text-center">
//                 <div className={`${shimmer} h-8 w-16 rounded bg-gray-300`} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export function InvoiceSkeleton() {
//   return (
//     <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
//       <div className="flex items-center">
//         <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
//         <div className="min-w-0">
//           <div className="h-5 w-40 rounded-md bg-gray-200" />
//           <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
//         </div>
//       </div>
//       <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
//     </div>
//   );
// }

// export function LatestInvoicesSkeleton() {
//   return (
//     <div
//       className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
//     >
//       <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
//       <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
//         <div className="bg-white px-6">
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//           <InvoiceSkeleton />
//         </div>
//         <div className="flex items-center pb-2 pt-6">
//           <div className="h-5 w-5 rounded-full bg-gray-200" />
//           <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export function TableRowSkeleton() {
//   return (
//     <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
//       {/* Customer Name and Image */}
//       <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
//         <div className="flex items-center gap-3">
//           <div className="h-8 w-8 rounded-full bg-gray-100"></div>
//           <div className="h-6 w-24 rounded bg-gray-100"></div>
//         </div>
//       </td>
//       {/* Email */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-32 rounded bg-gray-100"></div>
//       </td>
//       {/* Amount */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Date */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Status */}
//       <td className="whitespace-nowrap px-3 py-3">
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </td>
//       {/* Actions */}
//       <td className="whitespace-nowrap py-3 pl-6 pr-3">
//         <div className="flex justify-end gap-3">
//           <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
//           <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
//         </div>
//       </td>
//     </tr>
//   );
// }

// export function InvoicesMobileSkeleton() {
//   return (
//     <div className="mb-2 w-full rounded-md bg-white p-4">
//       <div className="flex items-center justify-between border-b border-gray-100 pb-8">
//         <div className="flex items-center">
//           <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
//           <div className="h-6 w-16 rounded bg-gray-100"></div>
//         </div>
//         <div className="h-6 w-16 rounded bg-gray-100"></div>
//       </div>
//       <div className="flex w-full items-center justify-between pt-4">
//         <div>
//           <div className="h-6 w-16 rounded bg-gray-100"></div>
//           <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
//         </div>
//         <div className="flex justify-end gap-2">
//           <div className="h-10 w-10 rounded bg-gray-100"></div>
//           <div className="h-10 w-10 rounded bg-gray-100"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function InvoicesTableSkeleton() {
//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//           <div className="md:hidden">
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//             <InvoicesMobileSkeleton />
//           </div>
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                   Customer
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Email
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Amount
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Date
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Status
//                 </th>
//                 <th
//                   scope="col"
//                   className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
//                 >
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//               <TableRowSkeleton />
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
