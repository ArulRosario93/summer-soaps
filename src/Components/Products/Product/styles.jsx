import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',
        fontWeight: "400",
        maxHeight: "70vh",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        fontSize: "20%",
      },
      media: {
        height: 0,
        paddingTop: '65.25%', // 16:9
      },
      toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
      formControl: {
        margin: theme.spacing(.8),
        minWidth: 110,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',
      },
}));