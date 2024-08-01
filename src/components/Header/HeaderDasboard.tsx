import logo from "@/assets/logo.png";
import notifikasiEmptyState from "@/assets/no_notification.svg";
import { NavLink } from "react-router-dom";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import { useState } from "react";

export default function HeaderDashboard() {
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const [isOpenDropdownTransaksi, setOpenDropdownTransaksi] = useState(false);
  const [isOpenDropdownNotifikasi, setOpenDropdownNotifikasi] = useState(false);

  const toggleDropdown = (dropdownType: string) => {
    switch (dropdownType) {
      case "transaksi":
        setOpenDropdownTransaksi((prev) => !prev);
        setOpenDropdownNotifikasi(false);
        break;
      case "notifikasi":
        setOpenDropdownNotifikasi((prev) => !prev);
        setOpenDropdownTransaksi(false);
        break;
      default:
        setOpenDropdownTransaksi(false);
        setOpenDropdownNotifikasi(false);
        break;
    }
  };

  return (
    <header className="flex flex-col">
      <div className="px-8 h-[73px] md:px-14 md:h-[84px] flex items-center justify-between bg-neutral-01">
        <NavLink to={"/dashboard"}>
          <div className="w-[78px] md:w-[100px]">
            <img src={logo} alt="Lumi Logo" />
          </div>
        </NavLink>
        <div
          className="text-3xl md:hidden flex items-center"
          onClick={() => setOpenMobileMenu(!isOpenMobileMenu)}
          aria-label="Tombol Menu Mobile"
        >
          {isOpenMobileMenu ? (
            <MaterialSymbol icon="close" title="close" />
          ) : (
            <MaterialSymbol icon="menu" title="menu" />
          )}
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-x-8">
            <li className="font-bold text-lg tracking-wide">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => {
                  return isActive
                    ? "text-primary-darkBlue border-b-2 border-b-primary-darkBlue"
                    : "text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left";
                }}
                aria-current="page"
              >
                Beranda
              </NavLink>
            </li>
            <li className="font-bold text-lg tracking-wide relative">
              <div
                className={`cursor-pointer ${
                  location.pathname === "/transaksi"
                    ? "text-primary-darkBlue border-b-2 border-b-primary-darkBlue"
                    : "text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                }`}
                aria-label="Menu dropdown transaksi"
              >
                <div
                  className={`flex items-center space-x-2 `}
                  onClick={() => toggleDropdown("transaksi")}
                >
                  Transaksi
                  {!isOpenDropdownTransaksi ? (
                    <MaterialSymbol
                      icon="keyboard_arrow_right"
                      title="keyboard_arrow_right"
                    />
                  ) : (
                    <MaterialSymbol
                      icon="keyboard_arrow_down"
                      title="keyboard_arrow_down"
                    />
                  )}
                </div>
                {isOpenDropdownTransaksi && (
                  <div className="bg-neutral-01 absolute w-[310px] rounded-lg shadow-02 z-[100] py-4 right-0 text-primary-darkBlue">
                    <span className="text-lg border-b top-20 flex flex-col items-start p-2 w-full px-4">
                      Transaksi
                    </span>
                    <div className="flex justify-around px-4 py-3 text-center">
                      <NavLink
                        to="/transaksi/transfer"
                        aria-label="Menu transfer"
                        className={"flex flex-col"}
                      >
                        <MaterialSymbol
                          icon="credit_card"
                          size={40}
                          title="credit_card"
                        />
                        <span>Transfer</span>
                      </NavLink>
                      <NavLink
                        to={"/transaksi/mutasi"}
                        aria-label="Menu mutasi rekening"
                        className={"flex flex-col"}
                      >
                        <MaterialSymbol
                          icon="description"
                          size={40}
                          title="description"
                        />
                        <span>Mutasi</span>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="font-bold text-lg tracking-wide flex items-center">
              <NavLink to={"/profil"} aria-label="Menu profil">
                {({ isActive }) => (
                  <div
                    className={`w-fit block flex items-center ${
                      isActive
                        ? "text-primary-darkBlue border-b-2 border-b-primary-darkBlue"
                        : "text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bottom-0"
                    }`}
                  >
                    <MaterialSymbol
                      icon="account_circle"
                      size={24}
                      title="account_circle"
                    />
                  </div>
                )}
              </NavLink>
            </li>
            <li className="font-bold text-lg tracking-wide relative">
              <div className="cursor-pointer" aria-label="Menu notifikasi">
                <div
                  className="relative flex items-center "
                  aria-describedby="Icon notifikasi"
                  onClick={() => toggleDropdown("notifikasi")}
                >
                  <MaterialSymbol
                    icon="notifications"
                    size={24}
                    title="notifications"
                  />
                  <MaterialSymbol
                    fill
                    icon="circle"
                    size={6}
                    title="circle"
                    className="absolute top-0 right-0 text-secondary-red"
                  />
                </div>
                {isOpenDropdownNotifikasi && (
                  <div className="bg-neutral-01 absolute w-[310px] rounded-lg shadow-02 z-50 py-4 right-0 text-primary-darkBlue">
                    <span className="text-lg border-b top-20 flex flex-col items-start p-2 w-full px-4">
                      Notifikasi
                    </span>
                    <div className="flex justify-around px-4 py-3 text-center">
                      <img
                        src={notifikasiEmptyState}
                        alt="Tidak ada notifikasi"
                      />
                    </div>
                    <div className={"text-sm text-center pt-3 border-t w-full"}>
                      <NavLink
                        to={"/dashboard/notifikasi"}
                        aria-label="Ke halaman notifikasi"
                      >
                        Lihat Selengkapnya
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="font-bold text-lg tracking-wide">
              <NavLink
                to={"/login"}
                className="text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                aria-label="Menu keluar"
              >
                <div className="flex items-center space-x-2">
                  <MaterialSymbol icon="logout" size={24} title="logout" />
                  <p>Keluar</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="relative">
        <div className="w-full bg-primary-lightBlue blur-sm h-[60px]"></div>

        {/* Mobile Nav */}
        <nav
          className={`md:hidden absolute w-full duration-500 z-[100] bg-white shadow-02 ${
            isOpenMobileMenu ? "block" : "hidden"
          }`}
        >
          <ul className={`pl-4 pt-3 pb-8`}>
            <li className="py-3 px-3 text-l font-bold">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => {
                  return isActive
                    ? "text-primary-darkBlue border-b-2 border-b-primary-darkBlue"
                    : "text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left";
                }}
                aria-label="Menu beranda"
              >
                Beranda
              </NavLink>
            </li>
            <li className="py-3 px-3 text-l font-bold">
              <div
                className={`cursor-pointer ${
                  location.pathname === "/transaksi/transfer"
                    ? "text-primary-darkBlue border-b-2 border-b-primary-darkBlue w-fit"
                    : "text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                }`}
                aria-label="Menu dropdown transaksi"
              >
                <div
                  className={`flex items-center space-x-2 `}
                  onClick={() => setOpenDropdownTransaksi((prev) => !prev)}
                >
                  Transaksi
                  {!isOpenDropdownTransaksi ? (
                    <MaterialSymbol
                      icon="keyboard_arrow_right"
                      title="keyboard_arrow_right"
                    />
                  ) : (
                    <MaterialSymbol
                      icon="keyboard_arrow_down"
                      title="keyboard_arrow_down"
                    />
                  )}
                </div>
              </div>
              {isOpenDropdownTransaksi && (
                <div className="bg-neutral-01 w-[310px] rounded-lg shadow-02 z-[100] py-4 mt-2 right-0 text-primary-darkBlue">
                  <span className="text-lg border-b top-20 flex flex-col items-start p-2 w-full px-4">
                    Transaksi
                  </span>
                  <div className="flex justify-around px-4 py-3 text-center">
                    <NavLink
                      to="/transaksi/transfer"
                      aria-label="Menu transfer"
                      className={"flex flex-col"}
                    >
                      <MaterialSymbol
                        icon="credit_card"
                        size={40}
                        title="credit_card"
                      />
                      <span>Transfer</span>
                    </NavLink>
                    <NavLink
                      to={"/transaksi/mutasi"}
                      aria-label="Menu mutasi rekening"
                      className={"flex flex-col"}
                    >
                      <MaterialSymbol
                        icon="description"
                        size={40}
                        title="description"
                      />
                      <span>Mutasi</span>
                    </NavLink>
                  </div>
                </div>
              )}
            </li>
            <li className="py-3 px-3 text-l font-bold">
              <NavLink
                to="/profil"
                className={({ isActive }) => {
                  return isActive
                    ? "text-primary-darkBlue border-b-2 border-b-primary-darkBlue"
                    : "text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left";
                }}
                aria-label="Menu profil"
              >
                Profil
              </NavLink>
            </li>
            <li className="py-3 px-3 text-l font-bold">
              <NavLink
                to={"/dashboard/notifikasi"}
                className={({ isActive }) => {
                  return isActive
                    ? "text-primary-darkBlue border-b-2 border-b-primary-darkBlue"
                    : "text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left";
                }}
                aria-label="Menu notifikasi"
              >
                Notifikasi
              </NavLink>
            </li>
            <li className="py-3 px-3 text-l font-bold">
              <NavLink
                to={"/login"}
                className="text-black relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-primary-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                aria-label="Menu keluar"
              >
                Keluar
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
