import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import "./style.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();
  let image;

  if (previewUrl) {
    image = <img src={previewUrl} alt="preview" />;
  } else if (props.updateUrl) {
    image = (
      <img
        src={`${process.env.REACT_APP_ASSET_URL}/${props.updateUrl}`}
        alt="update"
      />
    );
  } else image = null;

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {image}
          {!previewUrl && !props.updateUrl && (
            <p>Aşağıdaki butona basarak fotoğraf ekleyebilirsin 😉</p>
          )}
        </div>
        {!props.updateUrl ? (
          <>
            <Button
              className="image-form-button"
              variant="contained"
              color="primary"
              type="button"
              onClick={pickImageHandler}
            >
              <AddAPhotoIcon />
            </Button>
            {!isValid && (
              <p
                style={{ color: "red", fontWeight: "600", textAlign: "center" }}
              >
                Lütfen .png, .jpg, .jpeg formatlarında bir resim dosyası
                ekleyiniz
              </p>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ImageUpload;
