import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Explora",
    description:
      "Recorre las diferentes herramientas TIC, CREATIK te permite identificar el uso que le puedes dar a cada una y generar un recurso propio.",
    icon: "images/1.png",
  },
  {
    name: "Integra",
    description:
      "Asume el reto y elabora tu primer recurso educativo digital, pon a prueba tu creatividad y comparte con tus aprendices.",
    icon: "images/2.png",
  },
  {
    name: "Atrevete",
    description:
      "Atrevete a incorporar tus recursos para dinamizar el proceso de enseñanza – aprendizaje.",
    icon: "images/3.png",
  },
  {
    name: "Comparte",
    description: "Comparte tus creaciones con otros colegas.",
    icon: "images/4.png",
  },
];

export default function Contenido() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">
            Creatik
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            CREATIK
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Un entorno que conecta a instructores con el diseño de recursos
            digitales educativos para enriquecer el proceso de enseñanza y
            favorecer el aprendizaje. CREATIK cuenta con acceso a diferentes
            herramientas TIC de la web 3.0, las cuales facilitan el acceso a la
            información, el uso de recursos disponibles que promueven el
            aprendizaje colaborativo y significativo a partir de la
            incorporación de recursos didácticos para facilitar la aprehensión
            de los contenidos temáticos.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-16 rounded-md text-white">
                    <img
                      className="h-12 w-12"
                      aria-hidden="true"
                      src={feature.icon}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
