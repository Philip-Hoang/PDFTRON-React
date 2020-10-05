import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import "../../App.css";

const WebViewerComponent = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc: "/files/pdftron_about.pdf",
        ui: "beta",
      },
      viewer.current
    ).then((instance) => {
      const { docViewer } = instance;

      docViewer.on("documentLoaded", () => {
        //
        instance.setHeaderItems((header) => {
          header.push(
            {
              type: "actionButton",
              img: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m0 0h24v24h-24z" fill="none"/>
                    <path d="m16.9739609 5.6099999h-2.5857864v-2h4 2v6h-2v-2.58578644l-13.36396104 13.36396104-1.41421356-1.4142136z"/>
                  </svg>`,
              onClick: () => {
                // save the annotations
                console.log("i made a button!");
              },
            },
            {
              type: "toggleElementButton",
              img: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m0 0h24v24h-24z" fill="none"/>
                    <path d="m16.9739609 5.6099999h-2.5857864v-2h4 2v6h-2v-2.58578644l-13.36396104 13.36396104-1.41421356-1.4142136z"/>
                  </svg>`,
              button: "notes panel",
              element: "leftPanel",
              dataElement: "leftPanelButton",
              title: "Notes Panel",
            }
          );
        });

        //

        //
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default WebViewerComponent;
