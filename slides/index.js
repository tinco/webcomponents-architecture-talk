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
              First thing everyone does: A router
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              First thing everyone does: A router
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Nested routes
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Routes with many parameters
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Routes with logic (such as preloading, caches, authentication )
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Building a router from scratch cost more time than expected (bugs)
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Eventually we settled down on a design, it works like this:
            </Heading>
          </Slide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/index.html")}
            ranges={[
              { loc: [65, 66], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">You define a phusion-routes element</Text>},
              { loc: [66, 71], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Then you insert some page elements</Text>},
              { loc: [72, 77], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Namespaces for nesting routes</Text>},
              { loc: [65, 110], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">You end up with a neat app outline</Text>},
            ]}></CodeSlide>

            <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
              <Heading size={1} fit caps lineHeight={1} textColor="white">
                Many projects built routers like this
              </Heading>
            </Slide>

            <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
              <Heading size={1} fit caps lineHeight={1} textColor="white">
                For the pages we used now deprecated element inheritance
              </Heading>
            </Slide>

            <CodeSlide
              maxWidth="95vw"
              maxHeight="90vh"
              padding="0"
              transition={["slide"]}
              lang="html"
              code={require("raw!../assets/code/request.html")}
              ranges={[
                { loc: [1, 5], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Extend us-view and define a route</Text>},
              ]}></CodeSlide>

              <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                <Heading size={1} fit caps lineHeight={1} textColor="white">
                  The us-view in turn extends phusion-view
                </Heading>
              </Slide>

              <CodeSlide
                maxWidth="95vw"
                maxHeight="90vh"
                padding="0"
                transition={["slide"]}
                lang="js"
                code={require("raw!../assets/code/phusion-view.coffee")}
                ranges={[
                  { loc: [1, 8], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">The router triggers two methods</Text>},
                  { loc: [1, 4], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">visit</Text>},
                  { loc: [2, 3], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Resets the viewport</Text>},
                  { loc: [3, 4], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Invokes load with show as callback</Text>},
                  { loc: [5, 8], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">leave</Text>},
                  { loc: [6, 7], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">calls hide</Text>},
                  { loc: [7, 8], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">and then unload</Text>},
                  { loc: [9, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Load and unload do nothing by default</Text>},
                  { loc: [14, 21], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Show and hide perform simple page switching</Text>},
                ]}></CodeSlide>

                <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                  <Heading size={1} fit caps lineHeight={1} textColor="white">
                    The us-view element extends this simple base
                  </Heading>
                </Slide>

                <CodeSlide
                  maxWidth="95vw"
                  maxHeight="90vh"
                  padding="0"
                  transition={["slide"]}
                  lang="js"
                  code={require("raw!../assets/code/us-view.coffee")}
                  ranges={[
                    { loc: [5, 9], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Keeps track of dataloaders</Text>},
                    { loc: [11, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">When the cache is not valid</Text>},
                    { loc: [13, 15], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">It loads all the data</Text>},
                    { loc: [22, 23], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">When the the page requires authentication</Text>},
                    { loc: [23, 34], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Take care of authorisation</Text>},
                    { loc: [34, 38], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">If all is ok simply invoke the show callback</Text>},
                  ]}></CodeSlide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      The us-view element accumulated more responsibilities than we had anticipated
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Our authentication flow has just 5 branches
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Polymer 1.0 app-route examples are trivial, leaves a lot of questions.
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      API
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Decided to expose our API on a set of global variables
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Our models, resource logic and business logic all in plain JS files
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Features in our API:
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Feature: Flashing messages
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Feature: loggedin user info
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Feature: Logging in/out
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Feature: Navigation
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Feature: Flashing messages
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Feature: Requesting / cancelling metrics subscriptions
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Feature: Requesting / cancelling model subscriptions
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Simplicity & clean separation
                    </Heading>
                  </Slide>

                  <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                    <Heading size={1} fit caps lineHeight={1} textColor="white">
                      Graphs Elements
                    </Heading>
                  </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
