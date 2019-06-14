import React from "react";
import { Button } from "react-bootstrap";

const GitButton = props => {
  return (
    <Button variant="dark" className="ml-4" href={props.href} target="_blank">
      <img
        src="images/main/GitHub-Mark-Light-32px.png"
        alt="github"
        width="22"
        className="mr-2"
      />
      Github code
    </Button>
  );
};

export default GitButton;
