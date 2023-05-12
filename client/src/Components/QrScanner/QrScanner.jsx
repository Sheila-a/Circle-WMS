import design from "./style.module.css";
import { useState, useEffect } from "react";
import Instascan from "instascan";

const QrScanner = () => {
    const [result, setResult] = useState("");

    useEffect(() => {
        const scanner = new Instascan.Scanner({
          video: document.getElementById("preview"),
        });
        scanner.addListener("scan", (data) => {
          setResult(data);
        });
        
        Instascan.Camera.getCameras()
          .then((cameras) => {
            if (cameras.length > 0) {
              scanner.start(cameras[0]);
            } else {
              console.error("No cameras found");
            }
          })
          .catch((err) => {
            console.error(err);
          });
          return () => {
            scanner.stop();
          };
        }, []);


 
  return (
    <div className={design.QrScanner}>
      <video id="preview" style={{ width: "100%", height: "auto" }}></video>
      <p>{result}</p>
    </div>
  );
}

export default QrScanner
