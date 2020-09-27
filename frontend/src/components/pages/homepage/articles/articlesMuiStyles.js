import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-end",
      width: "100%",
      textAlign: "center",
      padding: "1rem",
      marginBottom:"2rem",
      fontSize: "1.15rem",
      color: "white",
      fontFamily: "Itim, cursive",
      fontWeight: 100,
      flexWrap: "wrap",
    },
    lasts: {
      width: "500px",
      border: "3px solid #03e9f4",
      padding: ".5rem",
      margin: "1rem",
      boxShadow: "2px 3px 2px rgba(0, 0, 0, .5)",
    },
    date: {
      margin:"8px auto 4px",
      textAlign: "right",
      textDecoration: "overline",
      color:"#a7a7a7",
      width:"auto",
      fontSize: ".9rem",
      textTransform: "capitalize",
    },
    links: {
      background: "#FAD2DE ",
      fontSize: "1.3rem",
      textTransform: "uppercase",
      borderRadius: "1rem",
      float: "right",
      marginTop: "1rem",
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