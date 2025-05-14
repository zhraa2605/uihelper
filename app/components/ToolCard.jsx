'use client';
import { Download, Copy, Shield, HelpCircle, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

const LibraryCard = ({ name, description, url, image, tech, installationType }) => {
  const [requiresInstallation, setRequiresInstallation] = useState(false);
  
  useEffect(() => {
    // Check if installation is required
    setRequiresInstallation(installationType === "required" || installationType === "optional");
  }, [installationType]);

  // Render appropriate icon based on installation type
  const renderIcon = () => {
    switch (installationType) {
      case "required":
        return <Download className="h-5 w-5 text-blue-500 mr-2" />;
      case "optional":
        return <Shield className="h-5 w-5 text-green-500 mr-2" />;
      case "copy-paste":
        return <Copy className="h-5 w-5 text-purple-500 mr-2" />;
      default:
        return <HelpCircle className="h-5 w-5 text-gray-500 mr-2" />;
    }
  };

  const renderText = () => {
    switch (installationType) {
      case "required":
        return "Installation Required";
      case "optional":
        return "Choose to Install or Copy/Paste";
      case "copy-paste":
        return "Copy/Paste ";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl dark:shadow-lg dark:shadow-gray-700 border border-gray-200 dark:border-gray-700  flex flex-col h-full dark:bg-[#00020F]">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute bottom-0 z-10 h-full w-full object-contain"
        />
      </div>

      <div className="p-5 text-black dark:text-white flex flex-col flex-1">
        {/* Card content wrapper - takes all available space */}
        <div className="flex flex-col flex-1">
          {/* Title and desc */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-50">{name}</h2>
          </div>
          
          {/* Description with overflow handling */}
          <div className="flex-1 overflow-auto">
            <p className="text-md text-gray-800 dark:text-gray-100 mt-2">{description}</p>
          </div>
          
          {/* Installation type - part of the footer */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-200 mt-4">
            {renderIcon()}
            <span>{renderText()}</span>
          </div>
        </div>

        {/* Footer section - always at the bottom */}
        <div className="flex items-center justify-between mt-6 pt-4 ">
          {/* Tech icons */}
          <div className="flex items-center transition-all duration-400 gap-0 hover:gap-1">
            {(tech || []).map((t, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-black border border-white/[.2] rounded-full flex justify-center items-center -ml-2 cursor-pointer"
              >
                <img src={t.icon} alt={t.name} title={t.name} className="p-2" />
              </div>
            ))}
          </div>

          {/* Link to website */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-purple-900 dark:hover:text-purple-300 hover:me-2 duration-300 text-sm"
          >
            Check Site <MoveRight className="h-4 w-4 ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;