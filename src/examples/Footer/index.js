// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Footer() {
  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      px={1.5}
    >
      <MDTypography variant="button" fontWeight="medium">
        &copy; {new Date().getFullYear()} by Clément Bellanger
      </MDTypography>
    </MDBox>
  );
}

export default Footer;
