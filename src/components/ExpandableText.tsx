import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  children: string;
}
const ExpandableText = ({ children }: Prop) => {
  const [expanded, setExpanded] = useState(false);
  const maxChar = 300;

  if (!children) return null;

  if (children.length < maxChar) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, maxChar) + "...";
  return (
    <Text>
      {summary}{" "}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
