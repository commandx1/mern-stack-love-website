import React from "react";
import ImageUpload from "../../../../formelements/imageUpload/imageUpload";
import Button from "@material-ui/core/Button/Button";

const InsertImage = (props) => {

  return (
    <form className="image-upload-form" onSubmit={props.submit}>
      <ImageUpload
          center
          id="image"
          onInput={props.inputHandler}
          errorText="Yalnızca .png, .jpg veya .jpeg uzantılı belgeler yükleyebilirsiniz."
        />

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        className="image-form-button"
        type="submit"
        disabled={!props.formState.isValid}
      >
        GÖNDER
      </Button>
    </form>
  );
};

export default InsertImage;
