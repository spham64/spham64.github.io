import { useEffect, useRef } from "react";

export default function Globe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const mountDelay = 1200;
    let timeoutId;

    timeoutId = setTimeout(() => {
      const ENCOM = window.ENCOM;
      const grid = window.grid;

      if (!ENCOM || !grid || !containerRef.current) {
        console.error("ENCOM or grid not found on window");
        return;
      }

      const main = containerRef.current;

      const width = main.clientWidth || window.innerWidth;
      const height = main.clientHeight || window.innerHeight;

      const globe = new ENCOM.Globe(width, height, {
        font: "Inconsolata",
        data: [],
        tiles: grid.tiles,
        baseColor: "#000000",
        markerColor: "#8e44ad",
        pinColor: "#aacfd1",
        satelliteColor: "#aacfd1",
        scale: 1,
        dayLength: 120000,
        introLinesDuration: 2000,
        maxPins: 500,
        maxMarkers: 4,
        viewAngle: 0.1,
      });

      main.appendChild(globe.domElement);

      let animationId;

      function animate() {
        globe.tick();
        animationId = requestAnimationFrame(animate);
      }

      function initGlobe() {
        globe.init();
        animate();

        fetch("https://ip-api.io/json")
          .then((r) => r.text())
          .then((r) => {
            const loc = JSON.parse(r);
            globe.addMarker(loc.latitude, loc.longitude, loc.ip);

            fetch("https://ip-api.io/json/209.182.233.230")
              .then((r2) => r2.text())
              .then((r2) => {
                const loc2 = JSON.parse(r2);
                const largeDiff = Math.abs(loc.lon - loc2.lon) > 25;
                globe.addMarker(
                  loc2.latitude,
                  loc2.longitude,
                  loc2.ip,
                  largeDiff
                );
              });
          });

        const constellation = [];
        const opts = {
          coreColor: "#3784ccff",
          numWaves: 8,
        };
        const alt = 1;

        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 3; j++) {
            constellation.push({
              lat: 50 * i - 30 + 15 * Math.random(),
              lon: 120 * j - 120 + 30 * i,
              altitude: alt,
            });
          }
        }

        globe.addConstellation(constellation, opts);
      }

      initGlobe();

      function handleResize() {
        const w = main.clientWidth || window.innerWidth;
        const h = main.clientHeight || window.innerHeight;

        globe.camera.aspect = w / h;
        globe.camera.updateProjectionMatrix();
        globe.renderer.setSize(w, h);
      }

      window.addEventListener("resize", handleResize);

      // CLEANUP
      return () => {
        window.removeEventListener("resize", handleResize);
        if (animationId) cancelAnimationFrame(animationId);
        if (globe.renderer?.dispose) globe.renderer.dispose();
        if (main.contains(globe.domElement)) main.removeChild(globe.domElement);
      };
    }, mountDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "black",
      }}
    />
  );
}
