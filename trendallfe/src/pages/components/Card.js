import React from 'react';

const Card = prop => {
  

  // Check if data is undefined
  console.log("called cards: ",prop);
  console.log(prop.image);
  const imgsrc = require(`./artifactimg/${prop.image}`)
  if (!prop.data) {
    return null;
 // or you can return an empty component <></>
  }

  return (
    <div className="bg-gray-100 ">
      <section>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">  
              <div className="p-5 bg-pallet1-50 flex items-center mx-auto border-b mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-40 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0 ">
                  <img
                    src={imgsrc}
                    alt="logo"
                  />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h1 className="text-black text-2xl title-font font-bold mb-2">{prop.artifact_types}</h1>
                  <p className="leading-relaxed text-base">{prop.data.image_description}</p>
                  <div className="py-4">
                    <div className=" inline-block mr-2">
                      <div className="flex pr-2 h-full items-center">
                        <p className="title-font font-medium">Publication : {prop.data.publications}</p>
                      </div>
                    </div>
                    {/* Repeat similar structure for other programming languages */}
                  </div>
                  <div className="md:flex font-bold text-gray-800">
                    <div className="w-full">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-start">
                          <h2 className="text-gray-500 inline-block mr-2">Painter:</h2>
                          <p className="inline-block text-left">{prop.painter_name}</p>
                        </div>
                        <div className="flex items-start">
                          <h2 className="text-gray-500 inline-block mr-2">Chapter:</h2>
                          <p className="inline-block text-left">{prop.chapter_name}</p>
                        </div>
                        <div className="flex items-start">
                          <h2 className="text-gray-500 inline-block mr-2">Fabric:</h2>
                          <p className="inline-block text-left">{prop.data.fabric_name}</p>
                        </div>
                        <div className="flex items-start">
                          <h2 className="text-gray-500 inline-block mr-2">Height:</h2>
                          <p className="inline-block text-left">{prop.data.height}</p>
                        </div>
                        {/* Repeat similar structure for other sections */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Card;
