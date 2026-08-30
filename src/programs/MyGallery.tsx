import { GalleryAccordionTitles, PhotoCollection } from "@/appData";
import { GalleryImage } from "@/types";
import WinAccordion from "components/WinAccordion/WinAccordion";
import Image from "next/image";
import { useState } from "react";
import styles from "./MyGallery.module.css";

const MyGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryImage>(
    PhotoCollection[0]
  );

  const getImgSrc = (photo: GalleryImage): string => {
    if (typeof photo.img === "string") return photo.img;
    return (photo.img as any)?.src || (photo.img as string);
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftpanel}>
        <div>
          <div className={styles.accordion}>
            {GalleryAccordionTitles.map((title: string, index: number) => (
              <WinAccordion key={index} title={title}>
                {PhotoCollection.map((photo: GalleryImage, idx: number) => (
                  <div
                    key={idx}
                    className={styles.accordion_content_item}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className={styles.accordion_content_text}>
                      <p>{photo.title}</p>
                    </div>
                  </div>
                ))}
              </WinAccordion>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightpanel}>
        <div className={styles.body}>
          {/* Immagine Principale */}
          <div className={styles.image_container}>
            <Image
              src={getImgSrc(selectedPhoto)}
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

          {/* Griglia Anteprime non stretchate */}
          <div className={styles.thumbnail_container}>
            {PhotoCollection.map((photo: GalleryImage) => (
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
                  src={getImgSrc(photo)}
                  alt={photo.title}
                  width={60}
                  height={60}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGallery;
