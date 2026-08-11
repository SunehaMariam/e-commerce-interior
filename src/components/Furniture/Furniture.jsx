import "./Furniture.css";

import leftShelf from "../../assets/images/gallery.png";
import deskSetup from "../../assets/images/gallery1.png";
import accentChair from "../../assets/images/gallery2.png";
import sideTables from "../../assets/images/gallery3.png";
import diningRoom from "../../assets/images/gallery4.png";
import bedroom from "../../assets/images/gallery5.png";
import wallFrame from "../../assets/images/gallery6.png";
import kitchenShelf from "../../assets/images/gallery7.png";
import diningCorner from "../../assets/images/gallery8.png";

function Furniture() {
  return (
    <section className="furniture-section">

      <h2 className="furniture-title">
        <small>Share your setup with</small>
        #FuniroFurniture
      </h2>

      <div className="Furniture-gallery">

        {/* Left tall shelf */}
        <img
          src={leftShelf}
          className="furniture-img furniture-shelf"
          alt="Shelf"
        />

        {/* Desk */}
        <img
          src={deskSetup}
          className="furniture-img furniture-desk"
          alt="Desk setup"
        />

        {/* Chair */}
        <img
          src={accentChair}
          className="furniture-img furniture-chair"
          alt="Accent chair"
        />

        {/* Side tables */}
        <img
          src={sideTables}
          className="furniture-img furniture-stools"
          alt="Side tables"
        />

        {/* Dining room */}
        <img
          src={diningRoom}
          className="furniture-img furniture-dining"
          alt="Dining room"
        />

        {/* Bedroom */}
        <img
          src={bedroom}
          className="furniture-img furniture-bedroom"
          alt="Bedroom"
        />

        {/* Wall frame */}
        <img
          src={wallFrame}
          className="furniture-img furniture-frame"
          alt="Wall frame"
        />

        {/* Kitchen shelf */}
        <img
          src={kitchenShelf}
          className="furniture-img furniture-entry"
          alt="Kitchen shelf"
        />

        {/* Dining corner */}
        <img
          src={diningCorner}
          className="furniture-img furniture-work"
          alt="Dining corner"
        />

      </div>

    </section>
  );
}

export default Furniture;