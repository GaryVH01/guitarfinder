import React from "react";

const page = () => {
  return (
    <div>
      <h1>Gibson</h1>
      <article className="flex mx-52">
        {/* card guitare */}
        <div className=" border border-black lg:float-left">
          <div className="border border-black flex justify-center">
            <div className="w-80 ">
              <img className="object-cover" src="guit.jpeg" alt="" />
            </div>
          </div>
          {/* Carrousel */}
          <div className="border border-black flex">
            <div className="flex-1">
              <img className="object-cover" src="guit.jpeg" alt="" />
            </div>
            <div className="flex-1">
              <img className="object-cover" src="guit2.jpeg" alt="" />
            </div>
            <div className="flex-1">
              <img className="object-cover" src="guit3.webp" alt="" />
            </div>
            <div className="flex-1">
              <img className="object-cover" src="guit4.jpeg" alt="" />
            </div>
          </div>
        </div>
        {/* description */}
        <div className="border border-black px-4 py-2">
          <div className="flex gap-2">
            <span className="font-semibold">Modèle :</span>
            <p> Gibson Les Paul</p>
          </div>
          <div className="flex gap-2">
            {" "}
            <span className="font-semibold">Type :</span>
            <p>Electric guitare</p>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Année :</span>
            <p>1956</p>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Body type :</span>
            <p>Single cut</p>
          </div>
          <div className="flex gap-2">
            {" "}
            <span className="font-semibold">Body wood :</span>
            <p>Ebene</p>
          </div>
          <div className="flex gap-2">
            {" "}
            <span className="font-semibold">Neck wood :</span>
            <p>Acacia</p>
          </div>
          <div className="flex gap-2">
            {" "}
            <span className="font-semibold">Fretboard wood :</span>
            <p>Acacia</p>
          </div>
          <div className="flex gap-2">
            {" "}
            <span className="font-semibold">Pickups :</span>
            <p>Humbuckers</p>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Quantity produced :</span>
            <p>2453</p>
          </div>
          <div className="flex-col gap-2">
            {" "}
            <span className="font-semibold">Description: </span>
            <p>
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
