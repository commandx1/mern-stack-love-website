import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      textAlign: "center",
      padding: "1rem",
      marginBottom:"2rem",
      fontSize: "1.15rem",
      color: "rgba(13, 10, 0, .8)",
      fontFamily: "Itim, cursive",
      fontWeight: 100,
      flexWrap: "wrap",
    },
    lasts: {
      backgroundColor: "rgba(255, 255, 255, .6)",
      width: "500px",
      border: "3px solid white",
      padding: ".5rem",
      margin: "1rem",
      boxShadow: "2px 3px 2px rgba(0, 0, 0, .5)",
    },
    date: {
      textAlign: "right",
      textDecoration: "overline",
      fontSize: ".9rem",
      textTransform: "capitalize",
    },
    links: {
      background: "#FAD2DE ",
      fontSize: "1.3rem",
      textTransform: "uppercase",
      borderRadius: "1rem",
      float: "right",
      marginTop: "2rem",
      padding: ".5rem 2rem",
      cursor: "pointer",
      transition: "300ms",
      border: "none",
      display: "flex",
      "&:hover": {
        background: "#F17FA0 ",
      },
    },
  });