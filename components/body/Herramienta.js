import React from "react";
import Navbar from "../navbar/Navbar";

export const Herramienta = () => {
  const people = [
    {
      categoria: "Presentaciones en línea",
      herramienta: "Powtoon",
      tutorial: "https://youtu.be/5Ig9nmv-090",
      link: "https://www.powtoon.com/?locale=es",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    {
      categoria: "Presentaciones en línea",
      herramienta: "Genially",
      tutorial: "https://youtu.be/BEptMhXPDjA",
      link: "https://genial.ly/es/",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    {
      categoria: "Presentaciones en línea",
      herramienta: "Canva",
      tutorial: "https://youtu.be/kdE6ZmT_5MI",
      link: "https://www.canva.com/",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    {
      categoria: "Actividades interactivas en línea",
      herramienta: "Educaplay",
      tutorial: "https://youtu.be/fM6LhVueIvM",
      link: "https://es.educaplay.com/",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    {
      categoria: "Actividades interactivas en línea",
      herramienta: "Kahoot",
      tutorial: "https://youtu.be/pANtMqNWBek",
      link: "https://kahoot.com/",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    {
      categoria: "Actividades interactivas en línea",
      herramienta: "Quizzis",
      tutorial: "https://youtu.be/8QPP3rdXjUo",
      link: "https://quizizz.com/",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    {
      categoria: "Imágenes ",
      herramienta: "Crello",
      tutorial: "https://youtu.be/kmGER-OHDE4",
      link: "https://crello.com/es/pro/",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    {
      categoria: "Imágenes ",
      herramienta: "Adobe Spark",
      tutorial: "https://youtu.be/8geZ6p0EdEU",
      link: "https://www.adobe.com/la/products/spark.html",
      video: "images/youtube.png",
      app: "images/development.png",
    },
    // More people...
  ];

  return (
    <>
    <Navbar/>
      <div className="m-6 relative flex-auto pb-12 pt-6">
        <div>
          <h2 className=" font-sans text-4xl text-center font-extrabold m-8">
            Elementos de apredizaje
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Titulo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tutorial
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        App
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.herramienta}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.categoria}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a href={person.tutorial} target="_blank">
                            <img
                              className="h-10 w-10 "
                              src={person.video}
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {" "}
                          <a href={person.link} target="_blank">
                            <img
                              className="h-10 w-10 "
                              src={person.app}
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herramienta;
