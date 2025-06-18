import styles from "@/app/ui/styles/home.module.css"

export default function Middle(){
    return (
        <main className="flex flex-min-screen space-y-4">
            <div>LOGIN</div>
            <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded outline-none border border-black"
              />
              <input
                type="text"
                placeholder="Password"
                className="w-full px-4 py-2 bg-[#d5a153] text-black placeholder-black rounded outline-none border border-black"
              />
        </main>
    )
}