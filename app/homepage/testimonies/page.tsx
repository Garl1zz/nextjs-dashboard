import { alice } from "@/app/ui/fonts";
import Image from "next/image";
import Header from "@/app/ui/testimonies/header";

const items = [
  { id: 1, 
    name: "Ivan Situmorang", 
    image: "/smile.png", 
    text: `"Aplikasi ini memiliki antarmuka yang ramah pengguna, pilihan produk yang lengkap, serta mendukung berbagai metode pembayaran seperti kartu kredit dan e-wallet. Selain itu, fitur ulasan dan rating membantu pengguna dalam memilih produk yang sesuai."`},
  { id: 2, 
    name: "Aprillian Josua marbun", 
    image: "/smile.png", 
    text: `"Pengalaman berbelanja di sini sangat menyenangkan! Produk yang ditawarkan berkualitas tinggi dan pengirimannya cepat."`},
  { id: 3, 
    name: "Rizky Pratama kurniawan", 
    image: "/smile.png", 
    text: `"Saya sangat puas dengan layanan pelanggan yang diberikan. Mereka sangat membantu dan responsif."`},
  { id: 4, 
    name: "Arif Ramadinata kurniawan", 
    image: "/flat.png", 
    text: `"Kualitas produk yang ditawarkan menurut saya kurang baik dan ada beberapa yang tidak sesuai dengan deskripsi. Saya pasti akan kembali untuk mengecek apakah barang barangnya sudah sesuai atau belum."`},
  { id: 5, 
    name: "Steven Christantio Sihombing", 
    image: "/smile.png", 
    text: `"Layanan pengiriman sangat cepat dan produk tiba dalam kondisi baik. Sangat merekomendasikan!"`},
  { id: 6, 
    name: "Natasha rara kusniadi", 
    image: "/flat.png", 
    text: `"Saya sangat terkesan dengan variasi produk yang ditawarkan. Tetapi ada yang kurang karena barang yg saya cari tidak ada, tolong di tingkatkan !"`},
];

export default function TestimoniesPage() {
  return (
    <div>
      <Header />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap justify-center gap-6 pt-4 pb-10 px-32 bg-[#9B1928]">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#F4AE38] text-black rounded-xl p-4 py-10 text-center shadow-lg border-gray-200 border-2"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={75}
              height={50}
              className="mb-2 mx-auto object-contain h-22"
            />
            <h2 className={`text-2xl ${alice.className}`}>{item.name}</h2>
            <p className={`text-xl text-black mt-4 ${alice.className}`}>
              {item.text}
            </p>
          </div>
        ))}
      </main>

      <div className="flex justify-center mt-10 p-10 ">
      <div className='flex mt-10 bg-white border-[10px] border-[#9B1928] w-1/3 mx-auto'></div>
      
        <button className="border border-white bg-[#9B1928] p-4 rounded-lg  ">
          <p className="text-white text-lg">+ Share</p>
          
        </button>
        <div className='flex mt-10 bg-white border-[10px] border-[#9B1928] w-1/3 mx-auto'></div> 
      </div>
      
    </div>
  );
}
