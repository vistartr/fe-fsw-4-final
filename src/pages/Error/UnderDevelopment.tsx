import FooterDashboard from "@/components/Footer/FooterDasboard"
import Header from "@/components/Header/HeaderDasboard"
import underDev from "@/assets/under_development.svg"
import { Link } from "react-router-dom"

export default function UnderDevelopment() {
  return (
    <>
      <Header />
      <main className='w-full h-screen px-6 grid place-items-center'>
        <div className='flex flex-col items-center'>
          <img src={underDev} alt='Ikon fitur dalam tahap pengembangan' />
          <h1 className='w-[min(100%,400px)] -mt-5 font-bold text-[32px] text-center mb-6'>
            Maaf fitur ini masih dalam tahap pengembangan
          </h1>
          <Link
            to='/dashboard'
            className='w-[min(100%,328px)] py-3 bg-primary-blue rounded-lg text-center text-white'
            role='button'
            aria-label='Tombol kembali ke dashboard'
          >
            Kembali ke dashboard
          </Link>
        </div>
      </main>
      <FooterDashboard />
    </>
  )
}
