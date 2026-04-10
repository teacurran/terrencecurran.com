import { useState, useEffect, useRef } from "react";

interface TypeTesterProps {
  fontUrl: string;
  fontName: string;
}

const DEFAULT_TEXT = "The quick brown fox jumps over the lazy dog";
const SIZES = [24, 32, 48, 64, 96, 128];
const DEFAULT_SIZE_INDEX = 3; // 64px

export default function TypeTester({ fontUrl, fontName }: TypeTesterProps) {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [sizeIndex, setSizeIndex] = useState(DEFAULT_SIZE_INDEX);
  const [loaded, setLoaded] = useState(false);
  const fontFaceRef = useRef<string>(`tester-${fontName.replace(/\s+/g, "-").toLowerCase()}`);
  const familyName = fontFaceRef.current;

  useEffect(() => {
    const face = new FontFace(familyName, `url(${fontUrl})`);
    face
      .load()
      .then((loadedFace) => {
        document.fonts.add(loadedFace);
        setLoaded(true);
      })
      .catch(() => setLoaded(false));
  }, [fontUrl, familyName]);

  const fontSize = SIZES[sizeIndex];

  return (
    <div className="type-tester">
      <div className="type-tester-controls">
        <label className="type-tester-size">
          <input
            type="range"
            min={0}
            max={SIZES.length - 1}
            value={sizeIndex}
            onChange={(e) => setSizeIndex(Number(e.target.value))}
          />
          <span>{fontSize}px</span>
        </label>
        <button
          className="type-tester-reset"
          onClick={() => {
            setText(DEFAULT_TEXT);
            setSizeIndex(DEFAULT_SIZE_INDEX);
          }}
          type="button"
        >
          Reset
        </button>
      </div>
      <div
        className="type-tester-input"
        contentEditable
        suppressContentEditableWarning
        style={{
          fontFamily: loaded ? `"${familyName}", serif` : "serif",
          fontSize: `${fontSize}px`,
          lineHeight: 1.3,
          opacity: loaded ? 1 : 0.3,
        }}
        onInput={(e) => setText(e.currentTarget.textContent ?? "")}
      >
        {text}
      </div>
    </div>
  );
}
