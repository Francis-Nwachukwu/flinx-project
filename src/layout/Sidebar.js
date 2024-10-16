import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import FlinxRealtyLogo from "shared/Logo";
import { sidebarContent } from "utils/data";
import { FRALogout, FRArrowUp } from "assets/svgs";
import { FlinxAvatar } from "assets/images";
import { Drawer } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { pathname } = useLocation();

  const [sidebarArray, setSidebarArray] = useState(sidebarContent);

  const toggleSidebar = (index) => {
    setSidebarArray(
      sidebarArray.map((sidebarItem) => {
        if (sidebarItem.id === index) {
          sidebarItem.open = !sidebarItem.open;
        } else {
          sidebarItem.open = false;
        }
        return sidebarItem;
      })
    );
  };

  return (
    <div className="px-2 py-4 max-md:hidden">
      <div className="px-6">
        <FlinxRealtyLogo />
      </div>

      <div className="mt-10 overflow-y-auto max-md:h-[calc(100vh-300px)] h-[calc(100vh-200px)] px-2">
        <div>
          {sidebarContent.slice(0, 6).map((content, index) =>
            content.collapsable ? (
              <div>
                <div className="flex justify-between items-center">
                  <div
                    className={`${
                      pathname.includes(content.path) &&
                      "bg-[#FAFCFF] hover:bg-opacity-90"
                    } font-medium w-full flex items-center gap-4 text-[#5D6679] whitespace-nowrap justify-start p-4 rounded-lg`}
                  >
                    <span>{content.icon}</span>
                    <p className="text-[14px]">{content.title}</p>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      toggleSidebar(content.id);
                    }}
                  >
                    <FRArrowUp />
                  </div>
                </div>
                {content?.collapsable && content?.open && (
                  <div className="flex flex-col">
                    {content?.collapsable?.map((item, idx) => (
                      <NavLink
                        className={`${
                          pathname.includes(content.path) &&
                          "bg-[#FAFCFF] hover:bg-opacity-90"
                        } font-medium w-full flex items-center gap-4 text-[#5D6679] whitespace-nowrap p-4 pl-12 rounded-lg`}
                        to={item.path}
                        key={idx}
                      >
                        <div className="relative -left-4 flex gap-3 items-center">
                          <p className="whitespace-nowrap hidden md:block text-[14px]">
                            {item.title}
                          </p>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={index} className="my-4">
                <NavLink
                  to={content.path}
                  className={`${
                    pathname.includes(content.path) &&
                    "bg-[#FAFCFF] hover:bg-opacity-90"
                  } font-medium w-full flex gap-4 text-[#5D6679] whitespace-nowrap justify-start items-center p-4 rounded-lg`}
                >
                  <span>{content.icon}</span>
                  <p className="text-[14px]">{content.title}</p>
                </NavLink>
              </div>
            )
          )}
        </div>
        <div className="mt-10">
          {sidebarContent.slice(6).map((content, index) => (
            <div key={index} className="my-4">
              <NavLink
                to={content.path}
                className={`${
                  pathname.includes(content.path) &&
                  "bg-[#FAFCFF] hover:bg-opacity-90"
                } font-medium w-full flex gap-4 text-[#5D6679] whitespace-nowrap justify-start items-center p-4 rounded-lg`}
              >
                <span>{content.icon}</span>
                <p className="text-[16px] max-md:text-[14px]">
                  {content.title}
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="px-2 py-6 flex justify-between items-start border-t border-[#EAECF0]">
        <div className="flex gap-2 items-center text-[14px] max-md:text-[12px]">
          <div className="w-[40px] h-[40px]">
            <img
              src={FlinxAvatar}
              alt="admin"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="">Owolu Opeyemi</p>
            <p className="text-faintGray">
              <p>admin@peaktower.com</p>
            </p>
          </div>
        </div>
        <div>
          <FRALogout />
        </div>
      </div>
      <Drawer
        anchor="right"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <div className="max-sm:w-full w-full px-4 py-12 text-[#cfd0d0] text-[16px] max-md:text-[14px] h-full">
          <div className="flex justify-between items-center mb-10">
            <FlinxRealtyLogo />
            <FaArrowLeft
              onClick={() => setIsSidebarOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="overflow-y-auto max-md:h-[calc(100vh-300px)] h-[calc(100vh-350px)] px-2">
            <div>
              {sidebarContent.slice(0, 6).map((content, index) =>
                content.collapsable ? (
                  <div>
                    <div className="flex justify-between items-center">
                      <div
                        className={`${
                          pathname.includes(content.path) &&
                          "bg-[#FAFCFF] hover:bg-opacity-90"
                        } font-medium w-full flex items-center gap-4 text-[#5D6679] whitespace-nowrap justify-start p-4 rounded-lg`}
                      >
                        <span>{content.icon}</span>
                        <p className="text-[14px]">{content.title}</p>
                      </div>
                      <div
                        onClick={() => {
                          toggleSidebar(content.id);
                        }}
                      >
                        <FRArrowUp />
                      </div>
                    </div>
                    {content?.collapsable && content?.open && (
                      <div className="flex flex-col">
                        {content?.collapsable?.map((item, idx) => (
                          <NavLink
                            className={`${
                              pathname.includes(content.path) &&
                              "bg-[#FAFCFF] hover:bg-opacity-90"
                            } font-medium w-full flex items-center gap-4 text-[#5D6679] whitespace-nowrap justify-end p-4 rounded-lg`}
                            to={item.path}
                            key={idx}
                          >
                            <div className="relative -left-4 flex gap-3 items-center">
                              <p className="whitespace-nowrap hidden md:block text-[14px]">
                                {item.title}
                              </p>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={index} className="my-4">
                    <NavLink
                      to={content.path}
                      className={`${
                        pathname.includes(content.path) &&
                        "bg-[#FAFCFF] hover:bg-opacity-90"
                      } font-medium w-full flex gap-4 text-[#5D6679] whitespace-nowrap justify-start items-center p-4 rounded-lg`}
                    >
                      <span>{content.icon}</span>
                      <p className="text-[14px]">{content.title}</p>
                    </NavLink>
                  </div>
                )
              )}
            </div>
            <div className="mt-10">
              {sidebarContent.slice(6).map((content, index) =>
                content.collapsable ? (
                  <div>
                    <div className="flex justify-between items-center">
                      <div
                        className={`${
                          pathname.includes(content.path) &&
                          "bg-[#FAFCFF] hover:bg-opacity-90"
                        } font-medium w-full flex items-center gap-4 text-[#5D6679] whitespace-nowrap justify-start p-4 rounded-lg`}
                      >
                        <span>{content.icon}</span>
                        <p className="text-[14px]">{content.title}</p>
                      </div>
                      <div
                        onClick={() => {
                          toggleSidebar(content.id);
                        }}
                      >
                        <FRArrowUp />
                      </div>
                    </div>
                    {content?.collapsable && content?.open && (
                      <div className="flex flex-col">
                        {content?.collapsable?.map((item, idx) => (
                          <NavLink
                            className={`${
                              pathname.includes(content.path) &&
                              "bg-[#FAFCFF] hover:bg-opacity-90"
                            } font-medium w-full flex items-center gap-4 text-[#5D6679] whitespace-nowrap justify-end p-4 rounded-lg`}
                            to={item.path}
                            key={idx}
                          >
                            <div className="relative -left-4 flex gap-3 items-center">
                              <p className="whitespace-nowrap hidden md:block text-[14px]">
                                {item.title}
                              </p>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={index} className="my-4">
                    <NavLink
                      to={content.path}
                      className={`${
                        pathname.includes(content.path) &&
                        "bg-[#FAFCFF] hover:bg-opacity-90"
                      } font-medium w-full flex gap-4 text-[#5D6679] whitespace-nowrap justify-start items-center p-4 rounded-lg`}
                    >
                      <span>{content.icon}</span>
                      <p className="text-[16px] max-md:text-[14px]">
                        {content.title}
                      </p>
                    </NavLink>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="px-2 py-6 flex justify-between items-start border-t border-[#EAECF0]">
            <div className="flex gap-2 items-center text-[14px] max-md:text-[12px]">
              <div className="w-[40px] h-[40px]">
                <img
                  src={FlinxAvatar}
                  alt="admin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="">Owolu Opeyemi</p>
                <p className="text-faintGray">
                  <p>admin@peaktower.com</p>
                </p>
              </div>
            </div>
            <div>
              <FRALogout />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
