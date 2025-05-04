
const LibraryCard = ({ name, description, url, image, tech ,requiresInstallation  }) => {
  return (
    <div className=" rounded-2xl overflow-hidden shadow-md border border-white/[0.1]">
      <div className="relative h-56 w-full overflow-hidden">
       
        <img
          src={image}
          alt={name}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-full object-contain"
        />
      </div>


      <div className="p-5 text-black">
         {/* Title and Free/Paid badge */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          </div>
        <p className="text-md text-gray-800 mt-2 line-clamp-2">{description}</p>


        <div className="flex items-center text-sm text-gray-500 my-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>
              {requiresInstallation ? ' Installation Required' : 'No Installation Required'}
            </span>
          </div>



        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            {tech.map((t, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-black border border-white/[.2] rounded-full flex justify-center items-center -ml-2 cursor-pointer"
                >
                  <img src={t.icon} alt={t.name} title={t.name} className="p-2" />
            
              </div>
            ))}
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple dark:text-purple-dark text-sm hover:underline"
          >
            Check Site 
          </a>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
