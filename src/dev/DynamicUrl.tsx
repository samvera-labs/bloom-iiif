import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import {
  ButtonForm,
  Curated,
  DynamicUrlStyled,
  ManualForm,
} from "./DynamicUrl.styled";
import { collections } from "./collections";

interface DynamicUrlProps {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
}

const DynamicUrl: React.FC<DynamicUrlProps> = ({ url, setUrl }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      url: { value: string };
    };
    setUrl(target.url?.value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = url;
  }, [url]);

  return (
    <DynamicUrlStyled>
      <ManualForm onSubmit={handleSubmit}>
        <label htmlFor="manual-collection">View a IIIF Collection</label>
        <div>
          <input
            type="text"
            name="url"
            id="manual-collection"
            placeholder="IIIF Collection"
            ref={inputRef}
          />
          <button type="submit">View</button>
        </div>
      </ManualForm>
      {collections.length > 0 && (
        <Curated>
          {collections.map((obj) => (
            <ButtonForm
              key={obj.label}
              onSubmit={handleSubmit}
              data-active={url === obj.url ? true : false}
            >
              <button name="url" value={obj.url}>
                {obj.label}
              </button>
            </ButtonForm>
          ))}
        </Curated>
      )}
    </DynamicUrlStyled>
  );
};

export default DynamicUrl;
