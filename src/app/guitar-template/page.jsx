import Carrousel from "@/components/Carrousel/Carrousel";
import Slider from "@/components/Carrousel/Slider";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="m-5 md:my-14">Gibson</h1>
      <article className="flex flex-col mx-12 lg:flex-row lg:mx-36">
        {/* card guitare */}
        <div className="flex flex-col">
          {/* <div className="flex justify-center ">
            <div className="rounded-lg bg-white shadow-lg shadow-zinc-400">
              <img
                className="object-cover w-full h-full p-2 rounded-lg"
                src="guit.jpeg"
                alt=""
              />
            </div>
          </div> */}
          {/* Carrousel */}
          {/* <Carrousel /> */}
          <Slider />
        </div>
        {/* description */}
        <div className="mt-5 lg:ml-10 lg:mt-0">
          <div className="flex gap- mb-1">
            <span className="font-semibold">Modèle :</span>
            <p> Gibson Les Paul</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Type :</span>
            <p>Electric guitare</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Année :</span>
            <p>1956</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Body type :</span>
            <p>Single cut</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Body wood :</span>
            <p>Ebene</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Neck wood :</span>
            <p>Acacia</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Fretboard wood :</span>
            <p>Acacia</p>
          </div>
          <div className="flex gap-2 mb-1">
            {" "}
            <span className="font-semibold">Pickups :</span>
            <p>Humbuckers</p>
          </div>
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Quantity produced :</span>
            <p>2453</p>
          </div>
          <div className="flex-col gap-2 mb-1">
            {" "}
            <span className="font-semibold">Description: </span>
            <p className="font-extralight text-justify">
              Imaginée pour le grand public, la guitare électrique solid body
              GIBSON Original Collection Les Paul Standard '50s P90 2019
              (LPS5P900GTNH1) est une descendante directe des Les Paul vintage
              originales. La Les Paul Original Standard 50's est équipée d'un
              corps en Acajou massif avec table en Erable, d'un manche en Acajou
              type 50's rounded, et d'une touche en Palissandre 22 frettes. Les
              micros sont des simple bobinage P-90 avec aimants Alico V, filtrés
              par des capacités Orange Drop. Accastillage traditionnel avec
              chevalet Tune-O-Matic ABR-1, cordier Stopbar aluminim taipiece, et
              mécaniques vintage deluxe avec boutons Keystone . <br />
              <br />
              Imaginée pour le grand public, la guitare électrique solid body
              GIBSON Original Collection Les Paul Standard '50s P90 2019
              (LPS5P900GTNH1) est une descendante directe des Les Paul vintage
              originales. La Les Paul Original Standard 50's est équipée d'un
              corps en Acajou massif avec table en Erable, d'un manche en Acajou
              type 50's rounded, et d'une touche en Palissandre 22 frettes. Les
              micros sont des simple bobinage P-90 avec aimants Alico V, filtrés
              par des capacités Orange Drop. Accastillage traditionnel avec
              chevalet Tune-O-Matic ABR-1, cordier Stopbar aluminim taipiece, et
              mécaniques vintage deluxe avec boutons Keystone .
              <br />
              <br />
              Imaginée pour le grand public, la guitare électrique solid body
              GIBSON Original Collection Les Paul Standard '50s P90 2019
              (LPS5P900GTNH1) est une descendante directe des Les Paul vintage
              originales. La Les Paul Original Standard 50's est équipée d'un
              corps en Acajou massif avec table en Erable, d'un manche en Acajou
              type 50's rounded, et d'une touche en Palissandre 22 frettes. Les
              micros sont des simple bobinage P-90 avec aimants Alico V, filtrés
              par des capacités Orange Drop. Accastillage traditionnel avec
              chevalet Tune-O-Matic ABR-1, cordier Stopbar aluminim taipiece, et
              mécaniques vintage deluxe avec boutons Keystone .
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default page;
