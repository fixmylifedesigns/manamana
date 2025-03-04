// components/InstagramEmbed.js
"use client";
import { useEffect } from "react";

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        height:"",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "99.375%",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={url}
          style={{
            background: "#FFFFFF",
            lineHeight: "0",
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: "50%",
                flexGrow: "0",
                height: "40px",
                marginRight: "14px",
                width: "40px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: "1",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: "0",
                  height: "14px",
                  marginBottom: "6px",
                  width: "100px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: "0",
                  height: "14px",
                  width: "60px",
                }}
              ></div>
            </div>
          </div>
          <div style={{ padding: "19% 0" }}></div>
          {/* Instagram icon and placeholder content */}
        </a>
        <p
          style={{
            color: "#c9c8cd",
            fontFamily: "Arial,sans-serif",
            fontSize: "14px",
            lineHeight: "17px",
            marginBottom: "0",
            marginTop: "8px",
            overflow: "hidden",
            padding: "8px 0 7px",
            textAlign: "center",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <a
            href={url}
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "normal",
              lineHeight: "17px",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            A post shared by Joaquim &amp; Eevee 先生 🇯🇵 Japanese teachers
            (@manamana_nihongo)
          </a>
        </p>
      </div>
    </blockquote>
  );
}
