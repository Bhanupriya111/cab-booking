import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import './Riderprofile.css';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/core components
// import { withStyles, makeStyles } from "@material-ui/core/styles";
// // core components
// import GridItem from "../../Components/Grid/GridItem";
// import GridContainer from "../../Components/Grid/GridContainer.js";
// // import CustomInput from "../../Components/Custom/CustomInput";
// // import Button from "../../Components/Custom/Button.js";
// import Card from "../../Components/Card/Card";
// import CardHeader from "../../Components/Card/CardHeader.js";
// // import CardAvatar from "../../Components/Card/CardAvatar.js";
// // import CardBody from "../../Components/Card/CardBody.js";
// // import CardFooter from "../../Components/Card/CardFooter.js";
// // import Snackbar from '@material-ui/core/Snackbar';

// // import MuiAlert from '@material-ui/lab/Alert';

// // import avatar from "assets/img/faces/marc.jpg";
// import { FormControl, TableBody, TableContainer, Table, TableCell, TableRow } from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';
// import Loader from '../../Components/Loader/Loader';

// const styles = {

//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// };



export default function Riderprofile(props) {

      return(
          <Grid className="grid">
              <Grid className="grid">
                  <div className="card cardPlain cardProfile">
                    <div className="cardHeader cardHeaderPlain cardHeaderStats">
                        <h4 className="cardTitleWhite">User Profile</h4>
                      <p className="cardCategoryWhite">Complete your profile</p>
                    </div>
                    <Grid>
                      <Grid>
 
                        <Input className="" placeholder="Name">
                            
                        </Input>
                      </Grid>
                    </Grid>
                  </div>
              </Grid>
          </Grid>
      )  
  }

