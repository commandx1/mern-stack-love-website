import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      width: "100%"
    },
    collapse: {
      width: "100%",
      overflowY:"auto",
      overflowX: 'hidden'
    },
    imageDiv: {
      border: "1px solid",
      width: "90%",
      margin: ".5rem auto 1rem",
      paddingTop: "1rem",
      background: "cadetblue",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    },
    titleWrapper: {
      width: "100%",
      backgroundColor: "rgba(100, 120, 200, .9)",
      color:"white",
      textAlign:"center"
    },
    title: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
      width: "95%",
      margin: "0 auto",
      overflowX: "auto",
      overflowY: "hidden",
      "&::-webkit-scrollbar-track": {
        backgroundColor: "red !important",
        height: "1px !important",
      },
      "&::-webkit-scrollbar": {
        height: "7px !important",
      },
    },
    editing: {
      display: "flex",
    },
    content: { textAlign: "center" },
    paper: {
      width: "100%",
      margin: theme.spacing(1),
      boxShadow:"2px 4px 3px rgba(100, 120, 200, .9)"
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
    deleteIcon: {
      color: "red",
    },
    EditIcon: {
      color: "green",
    },
    margin: {
      margin: theme.spacing(1),
    },
    question: {
    display: "flex",
    alignItems: "center",
    color:"white",
    justifyContent: "center"
    }
  }));