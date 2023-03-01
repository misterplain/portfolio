import Typography from "@mui/material/Typography";
import Button from "./components/Button/Button";

const ComponentsTest = () => {
  return (
    <>
      <Typography variant="h2">Heading 2 example</Typography>
      {/* <Typography variant="h3">Example Typography</Typography>
      <Typography variant="h4">Example Typography</Typography>
      <Typography variant="h5">Example Typography</Typography>
      <Typography variant="h6">Example Typography</Typography>
      <Typography variant="subtitle1">Example Typography</Typography>
      <Typography variant="substitle2">Example Typography</Typography> */}
      <Typography variant="body1">Body 1 Example</Typography>
      <Typography variant="body2">Body 2 Example</Typography>
      <Typography variant="button">Example Typography</Typography><br></br>
      <Button>Example styled Button</Button>

    </>
  );
};

export default ComponentsTest;
