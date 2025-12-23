import React, { useState } from "react";
import { 
  HiOutlineHome, 
  HiOutlineUserGroup, 
  HiOutlineBriefcase, 
  HiOutlinePhone, 
  HiOutlineChevronDown, 
  HiOutlinePhotograph 
} from "react-icons/hi";

const Sidebar = ({ cmsData, activePage, activeSectionId, onPageChange, onSectionChange }) => {
  // Track which page menus are "expanded"
  const [expandedPages, setExpandedPages] = useState({ home: true });

  const toggleExpand = (pageKey) => {
    setExpandedPages(prev => ({
      ...prev,
      [pageKey]: !prev[pageKey]
    }));
  };

  // Define your main navigation items
  const navItems = [
    { id: "home", label: "Homepage", icon: <HiOutlineHome /> },
    { id: "about", label: "About", icon: <HiOutlineUserGroup /> },
    { id: "services", label: "Services", icon: <HiOutlineBriefcase /> },
    { id: "contact", label: "Contact Us", icon: <HiOutlinePhone /> },
  ];

  return (
    <div className="w-80 bg-[#0a0f14] rounded-[30px] border border-gray-800 p-6 flex flex-col h-full sticky top-0 font-manrope">
      {/* Branding */}
      <div className="flex items-center gap-3 mb-10 px-2 font-bold tracking-tighter text-lg">
        <div className="w-6 h-6 bg-cyan-400 rounded-sm"></div>
        THE VARALLO GROUP
      </div>

      <nav className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
        {navItems.map((page) => {
          const sections = cmsData[page.id] || [];
          const isExpanded = expandedPages[page.id];
          const isPageActive = activePage === page.id;

          return (
            <div key={page.id} className="space-y-1">
              {/* Page Parent Button */}
              <button 
                onClick={() => {
                  onPageChange(page.id);
                  toggleExpand(page.id);
                  // Automatically select first section of page if not already on that page
                  if (!isPageActive && sections.length > 0) onSectionChange(sections[0].id);
                }}
                className={`flex items-center justify-between w-full p-3 rounded-xl transition-all ${
                  isPageActive ? "bg-gray-800/60 text-white" : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isPageActive ? "text-cyan-400" : "text-gray-500"}>{page.icon}</span>
                  <span className="font-medium">{page.label}</span>
                </div>
                {sections.length > 0 && (
                  <HiOutlineChevronDown className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                )}
              </button>

              {/* Dynamic Section Sub-menu */}
              {isExpanded && sections.length > 0 && (
                <div className="ml-5 border-l border-gray-800 space-y-1 mt-1 animate-fadeIn">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        onPageChange(page.id);
                        onSectionChange(section.id);
                      }}
                      className={`block w-full text-left px-6 py-2 rounded-lg text-xs font-medium transition-all capitalize ${
                        activeSectionId === section.id && isPageActive
                          ? "text-cyan-400 bg-cyan-400/5"
                          : "text-gray-600 hover:text-gray-300"
                      }`}
                    >
                      {section.id.replace(/-/g, ' ')}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Static Bottom Buttons */}
      <div className="pt-6 border-t border-gray-800 mt-6 space-y-3">
        <button className="flex items-center gap-3 w-full p-4 border border-gray-800 rounded-2xl text-gray-400 hover:bg-gray-800/20 transition-all text-sm">
          <HiOutlinePhotograph className="text-lg" /> Media Library
        </button>
      </div>
    </div>
  );
};

export default Sidebar;