import { PhotoCollection } from "@/appData";
import { GalleryImage } from "@/types";
import Image from "next/image";
import { useState } from "react";
import styles from "./MyGallery.module.css";

const MyGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryImage>(
    PhotoCollection[0]
  );

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {/* Immagine Principale con max-height per non sforare il layout */}
        <div className={styles.image_container}>
          <Image
            src={selectedPhoto.img.src || (selectedPhoto.img as any)}
            alt={selectedPhoto.title}
            width={1200}
            height={800}
            style={{
              maxHeight: "360px",
              width: "auto",
              objectFit: "contain",
              margin: "0 auto",
              display: "block",
            }}
          />
        </div>

        {/* Dettagli della Foto */}
        <div className={styles.details}>
          <h4>{selectedPhoto.title}</h4>
          <p>
            <strong>Location:</strong> {selectedPhoto.location}
          </p>
          <p>
            <strong>Description:</strong> {selectedPhoto.desc}
          </p>
          <p>
            <strong>Date:</strong> {selectedPhoto.date}
          </p>
        </div>

        {/* Griglia Anteprime / Thumbnail (Fix per evitare lo stretch) */}
        <div className={styles.thumbnail_container}>
          {PhotoCollection.map((photo) => (
            <div
              key={photo.id}
              className={`${styles.thumbnail} ${
                selectedPhoto.id === photo.id ? styles.active : ""
              }`}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                width: "60px",
                height: "60px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                border:
                  selectedPhoto.id === photo.id
                    ? "2px solid #0055ea"
                    : "1px solid #ccc",
              }}
            >
              <Image
                src={photo.img.src || (photo.img as any)}
                alt={photo.title}
                fill
                sizes="60px"
                style={{
                  objectFit: "cover", // Mantiene le proporzioni tagliano gli eccessi senza stretchare
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyGallery;
