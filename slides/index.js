// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import CodeSlide
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  teamPhusion: require("../assets/team_phusion.png"),
  unionStation: require("../assets/union_station.png"),
  performanceAnalysis: require("../assets/performance_analysis.gif"),
  announceHeader: require("../assets/union_station_announce_header.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#000000",
  pink: "#FF2A69",
  blue: "#69CFF9",
  yellow: "#EAE800"
},{
  primary: "Montserrat",
  secondary: "NeoNoire",
  tertiary: "Bad Script"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="pacman" transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Architecture hilights of a Polymer App
            </Heading>
            <Text textSize="1.5em" margin="0.2em 1em 0 0" textAlign="right" textColor="blue" textFont="tertiary">
                by Tinco Andringa
              </Text>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.teamPhusion.replace("/","")} maxWidth={1200}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.unionStation.replace("/","")} maxWidth={1200}>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Started end of 2013 built on Polymer 0.2
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Text textSize="1.6em" bold margin="0em 0em 0.2em 0em" letterSpacing="-0.1em" textColor="white" >
              Just graphs, so SPA
            </Text>
            <Image src={images.performanceAnalysis.replace("/", "")} width="80%" />
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Exploration of frameworks in 2013
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              (Very superficial)
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              React was not on our radar
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Angular was super popular
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              We built a prototype, it proved to us 2 things
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Dozens of live SVG graphs on a single page was feasible
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Angular is awful
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              It reeked of over-engineering: Provider, service, factory
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Ember.JS: REST and CRUD oriented
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Backbone.JS: seemed a little too barebones
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              .. ironically, we eventually rolled out our own 30 line JS ORM
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              That is when Polymer was announced on HN
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              It was clearly *alpha* quality software
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              But its philosophy was decidedly *future proof*
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              We quickly rewrote our Angular prototype to Polymer
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Union Station Decisions
            </Heading>
            <Image src={images.announceHeader.replace("/", "")} width="100%" />
          </Slide>


          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              We quickly rewrote our Angular prototype to Polymer
            </Heading>
          </Slide>


          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/bla.html")}
            ranges={[
              { loc: [0, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Some more advanced stuff</Text>},
              { loc: [4, 9], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We want a nice way to access our internal elements with an ID</Text>},
              { loc: [18, 24], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Clean up a bit by putting the template attaching in a private method</Text>},
              { loc: [24, 32], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Create an private method to create our cache</Text>},
              { loc: [25, 26], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Set a familiar property to use as a map</Text>},
              { loc: [25, 27], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Loop over all our internal elements</Text>},
              { loc: [25, 31], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">If they have an ID, add them to our map</Text>},
              { loc: [16, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Now we can easily access stuff</Text>},
              { loc: [0, 17], },
            ]}></CodeSlide>

        </Deck>
      </Spectacle>
    );
  }
}
