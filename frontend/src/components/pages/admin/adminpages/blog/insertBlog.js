import React, { useState, useContext, useEffect, Fragment } from "react";
import {
  generalContext,
  authContext,
} from "../../../../../WRAPPERS/Context/myContext";
import Editor from "../../../../editor/Editor";
import Input from "../../../../formelements/Input";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import { useHistory } from "react-router-dom";
import useHttpClient from "../../../../../hooks/useHttpClient";
import { useForm } from "../../../../../hooks/useForm";
import ImageUpload from "../../../../formelements/imageUpload/imageUpload";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Spinner from "../../../../spinner/Spinner";

const InsertBlog = () => {
  const { isLoading, error, open, sendRequest, clearError } = useHttpClient();
  const general = useContext(generalContext);
  const auth = useContext(authContext);
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  const [select, setselect] = useState();

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const [formState, inputHandler, setFormData] = useForm(
    {
      image: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const useStyles = makeStyles({
    form: {
      display: "-webkit-box" /* OLD - iOS 6-, Safari 3.1-6 */,
      display: "-moz-box" /* OLD - Firefox 19- (buggy but mostly works) */,
      display: "-ms-flexbox" /* TWEENER - IE 10 */,
      display: "-webkit-flex" /* NEW - Chrome */,
      display: "flex",
      flexDirection: "column",
      paddingBottom: ".5rem",
      width: "100%",
      height: "100%",
      justifyContent: "space-between",
      textAlign: "center",
      overflowX: "hidden",
    },
    label: {
      textDecoration: "underline",
      margin: ".3rem auto .2rem auto",
      fontSize: "1rem",
    },
    formControl: {
      margin: "1rem",
      minWidth: 120,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/blog/categories"
        );
        setCategories(res.categories);
      } catch (error) {}
    };
    fetchCategories();
  }, []);

  return (
    <Fragment>
      {isLoading && <Spinner />}

      <form
        className={classes.form}
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const formData = new FormData();
            formData.append("title", newPost.title);
            formData.append("content", newPost.content);
            formData.append("image", formState.inputs.image.value);
            formData.append("kullanici", auth.userId);
            formData.append("username", auth.name);
            formData.append("category", select);
            const responseData = await sendRequest(
              process.env.REACT_APP_BACKEND_URL + `/blog`,
              "POST",
              formData
            );
            setNewPost({ title: "", content: "" });
            history.push(
              `/Blog/postId/${responseData.blog._id}/Başlık/${responseData.blog.title}`
            );
          } catch (err) {}
        }}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Lütfen Bir Kategori Seçin
          </InputLabel>
          <Select
            required
            native
            value={select}
            onChange={(e) => setselect(e.target.value)}
            label="Lütfen Bir Kategori Seçin"
            inputProps={{
              name: "Lütfen Bir Kategori Seçin",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {!isLoading &&
              categories.length > 0 &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.label}
                </option>
              ))}
          </Select>
        </FormControl>
        <Input
          required
          bg="white"
          label="Post Başlığı"
          style={{ marginTop: ".1rem", flex: 1 }}
          inputStyle={{ marginBottom: "1rem" }}
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <Editor
          type="blog"
          style={{ flex: 15 }}
          value={newPost.content}
          onChange={(e, editor) => {
            const data = editor.getData();
            setNewPost({ ...newPost, content: data });
          }}
        />
        <ImageUpload
          id="image"
          onInput={inputHandler}
          center
          errorText="Lütfen Geçerli Bir Resim Yükleyiniz"
        />
        <Button
          style={{ flex: 1 }}
          variant="contained"
          size="medium"
          color="primary"
          fullWidth
          type="submit"
        >
          Gönder
        </Button>
      </form>
    </Fragment>
  );
};

export default InsertBlog;
