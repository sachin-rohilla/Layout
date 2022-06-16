import Navbar from "./Navbar";
import Image from "./Image"
import FormFillUp from "./FormFillUp";
import Stats from"./Stats"
import Grid from "./Grid"
import Box from "./Box"
import Profile from "./Profile"
import Description from"./Description"
import Footer from "./Footer"
const Layout = () => {
  return (
    <>
      <Navbar />
      <Image/>
      <FormFillUp/>
      <Stats/>
      <Grid/>
      <Box/>
      <Profile/>
      <Description/>
      <Footer/>
    </>
  );
};

export default Layout;
