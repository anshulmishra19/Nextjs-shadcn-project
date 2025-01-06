import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between p-4 ">
      {/* Search Bar */}
      <div className="hidden md:flex items-center  px-3 py-2 rounded-lg">
        <Image src="/Home.png" alt="Home" width={16} height={10} />
        <input
          type="text"
          placeholder="   | Dashboard > "
          className="ml-2 bg-transparent text-white focus:outline-none"
        />
      </div>

      {/* User & Icons */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Message" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="Announcement"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col text-right">
          <span className="text-xs leading-3 font-medium">Housing Mantra</span>
          <span className="text-[10px] text-gray-300">Super Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
