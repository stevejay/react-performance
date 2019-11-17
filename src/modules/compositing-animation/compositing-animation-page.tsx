import React from "react";
import global from "global";
import {
  blockDOMUpdates,
  Button,
  Page,
  Paragraph,
  Switcher,
  useScrollToTop
} from "src/shared";

type Props = {
  readonly title: string;
};

const CompositingAnimationPage: React.FC<Props> = ({ title }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  useScrollToTop();

  const handleClick = () => {
    setIsLoading(true);
    global.setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <Page.Box>
      <Page.Header title={title} />
      <Paragraph>
        The first two buttons show a spinner for five seconds when clicked, but
        each animates the spinner in a different way. The second button will
        enter a synchronous (blocking) loop for two seconds when clicked.
      </Paragraph>
      <Switcher spacing="1rem" threshold="copy">
        <Button
          isLoading={isLoading}
          useCSSAnimation
          variant="primary"
          onClick={handleClick}
        >
          CSS animation
        </Button>
        <Button
          isLoading={isLoading}
          useCSSAnimation={false}
          variant="primary"
          onClick={handleClick}
        >
          rAF animation
        </Button>
        <Button
          variant="primary"
          useCSSAnimation={false}
          onClick={() => blockDOMUpdates(2000)}
        >
          Freeze site for two seconds
        </Button>
      </Switcher>
    </Page.Box>
  );
};

export { CompositingAnimationPage };
