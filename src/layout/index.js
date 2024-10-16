import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, className }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="h-full w-full flex flex-col overflow-y-hidden">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          className={`h-full my-2 overflow-y-auto p-6 max-md:p-4 ${className} bg-[#FCFCFD] border border-[#E8E8E8] rounded-3xl`}
        >
          <div className="bg-white border border-[#E8E8E8] rounded-3xl min-h-full flex gap-6 flex-col flex-1 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
