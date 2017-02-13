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
  party: require("../assets/party.gif"),
  frameworks: require("../assets/frameworks.png"),
  xkcd: require("../assets/xkcd.png"),
  how: require("../assets/how.gif"),
  fire: require("../assets/fire.gif"),
  holdOn: require("../assets/hold-on.gif"),
  browsers: require("../assets/browsers.gif"),
  shadow: require("../assets/shadow.gif"),
  build: require("../assets/build.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#000000",
  pink: "#FF2A69",
  blue: "#69CFF9",
  yellow: "#EAE800"
},{
  primary: "Montserrat",
  secondary: "Permanent Marker",
  tertiary: "Yellowtail"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="pacman" transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Text textSize="2.2em" bold margin="0 0 0 0.6em" letterSpacing="-0.1em" textAlign="left" textColor="yellow" >
              An introduction to
            </Text>
            <Text fit lineHeight={1} textColor="pink" textFont="secondary">
              WebComponents
            </Text>
            <Text textSize="2.1em" margin="0 2.4em 0 0" textAlign="right" textColor="blue" textFont="tertiary">
              by Goffert van Gool
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              The web is awesome
            </Heading>
            <Image src={images.party.replace("/", "")} width="80%" />
          </Slide>

          <Slide transition={["zoom"]} bgColor="pink" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} margin="0 0 3rem 0" textColor="white">
              Rapid innovation
            </Heading>
            <Appear>
              <div>
                <div style={{margin: "2rem 0 2rem", display: "flex", justifyContent: "space-between", padding: "0 1rem 0 1rem"}}>
                  <Text textSize="1.4em" bold textColor="black" textAlign="left" display="inline-block" margin="0">
                    Navigating the DOM
                  </Text>
                  <Text textSize="1.4em" bold textColor="black" textAlign="right" display="inline-block" margin="0">
                    jQuery
                  </Text>
                </div>
              </div>
            </Appear>
            <Appear>
              <div>
                <div style={{margin: "2rem 0 2rem", display: "flex", justifyContent: "space-between", padding: "0 1rem 0 1rem"}}>
                  <Text textSize="1.4em" bold textColor="black" textAlign="left" display="inline-block" margin="0">
                    Better layout system
                  </Text>
                  <Text textSize="1.4em" bold textColor="black" textAlign="right" display="inline-block" margin="0">
                    Bootstrap
                  </Text>
                </div>
              </div>
            </Appear>
            <Appear>
              <div>
                <div style={{margin: "2rem 0 2rem", display: "flex", justifyContent: "space-between", padding: "0 1rem 0 1rem"}}>
                  <Text textSize="1.4em" bold textColor="black" textAlign="left" display="inline-block" margin="0">
                    Code organisation
                  </Text>
                  <Text textSize="1.4em" bold textColor="black" textAlign="right" display="inline-block" margin="0">
                    Frameworks
                  </Text>
                </div>
              </div>
            </Appear>
            <div style={{position: "fixed", top: "-39%", left: "-30%"}}>
              <Appear>
                <Image src={images.frameworks.replace("/", "")} margin="0" />
              </Appear>
            </div>
          </Slide>

          <Slide transition={["zoom"]} bgColor="pink" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} margin="0 0 3rem 0" textColor="white">
              The platform adapts
            </Heading>
            <Appear>
              <div>
                <div style={{margin: "2rem 0 2rem", display: "flex", justifyContent: "space-between", padding: "0 1rem 0 1rem"}}>
                  <Text textSize="1.8em" bold textColor="black" textAlign="left" display="inline-block" margin="0">
                    jQuery
                  </Text>
                  <Text textSize="1.8em" bold textColor="black" textAlign="right" display="inline-block" margin="0">
                    querySelector()
                  </Text>
                </div>
              </div>
            </Appear>
            <Appear>
              <div>
                <div style={{margin: "2rem 0 2rem", display: "flex", justifyContent: "space-between", padding: "0 1rem 0 1rem"}}>
                  <Text textSize="1.8em" bold textColor="black" textAlign="left" display="inline-block" margin="0">
                    Bootstrap
                  </Text>
                  <Text textSize="1.8em" bold textColor="black" textAlign="right" display="inline-block" margin="0">
                    CSS Flex / Grid
                  </Text>
                </div>
              </div>
            </Appear>
            <Appear>
              <div>
                <div style={{margin: "2rem 0 2rem", display: "flex", justifyContent: "space-between", padding: "0 1rem 0 1rem"}}>
                  <Text textSize="1.8em" bold textColor="black" textAlign="left" display="inline-block" margin="0">
                    Frameworks
                  </Text>
                  <Text textSize="1.8em" bold textColor="black" textAlign="right" display="inline-block" margin="0">
                    ???
                  </Text>
                </div>
              </div>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="white" maxWidth={1200}>
            <Image src={images.xkcd.replace("/", "")} width="100%" />
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1400}>
            <Heading size={1} fit caps lineHeight={1.5} textColor="white">
              Another framework is not the answer
            </Heading>
            <Appear>
              <Heading size={1} fit caps lineHeight={1.5} textColor="white">
                They all try to solve the same problem
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit caps lineHeight={3} textColor="pink">
                No native way to structure code
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" maxWidth={1200}>
            <Heading size={1} fit caps lineHeight={1} textColor="pink">
              &lt;HTML&gt;
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Image src={images.how.replace("/", "")} width="80%" />
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Heading fit caps lineHeight={1.4} textColor="white">
              When you write HTML
            </Heading>
            <Heading fit caps lineHeight={1.4} textColor="white">
              you are really creating
            </Heading>
            <Heading fit lineHeight={1.4} textColor="white">
              <span style={{color:"#69CFF9", textDecoration:"underline"}}>instances</span> of <span style={{color:"#69CFF9", textDecoration:"underline"}}>classes</span>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <CodePane
              textSize="3rem"
              lang="html"
              source={require("raw!../assets/tags.txt")}
            />
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Appear>
              <Text textSize="3.2em" textColor="white" margin="0 0 2rem 0" textFont="helvetica">
                ¯\_(ツ)_/¯
              </Text>
            </Appear>
            <div style={{position: "absolute", top: "-17%", left: "55%", right: "-20%", transform: "rotate(-6deg)"}}>
              <Appear>
                <Text textSize="2.4em" textAlign="left" textColor="pink" margin="0 0 4rem 0" textFont="tertiary">
                  looks like &lt;div&gt;
                </Text>
              </Appear>
            </div>
            <div style={{padding:"0 20%"}}>
              <CodePane
                textSize="2.6rem"
                lang="html"
                source={require("raw!../assets/divs.txt")}
              />
            </div>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <div style={{padding:"0 17%"}}>
              <CodePane
                background="black"
                textSize="2.6rem"
                lang="javascript"
                source={require("raw!../assets/jquery.txt")}
              />
            </div>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <div>
              <CodePane
                backgroundColor="black"
                textSize="2.6rem"
                lang="javascript"
                source={require("raw!../assets/vanilla.txt")}
              />
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" maxWidth={1200}>
            <Heading margin="0 0 .1em 0" textColor="white">
              main.js
            </Heading>
            <Image src={images.fire.replace("/", "")} width="100%" />
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <CodePane
              textSize="3rem"
              lang="html"
              source={require("raw!../assets/tags.txt")}
            />
            <Appear>
              <CodePane
                padding="0 1em 1em 1em"
                margin="-1em 0 0 0"
                textSize="3rem"
                lang="html"
                source={require("raw!../assets/tags2.txt")}
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Text size={1} fit lineHeight={1.5} textColor="pink" textFont="secondary">
              Custom Elements
            </Text>
            <Heading size={1} fit caps lineHeight={2} textColor="white">
              Associate a <span style={{color:"#69CFF9", textDecoration:"underline"}}>tag</span> with a <span style={{color:"#69CFF9", textDecoration:"underline"}}>class</span>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Text size={1} fit lineHeight={1.5} textColor="pink" textFont="secondary">
              Web Components
            </Text>
            <Heading textSize="2em" lineHeight="1.2" textAlign="right" textColor="white">
              Custom Elements
            </Heading>
            <Heading textSize="2em" lineHeight="1.2" textAlign="right" textColor="white">
              Templates
            </Heading>
            <Heading textSize="2em" lineHeight="1.2" textAlign="right" textColor="white">
              ShadowDOM
            </Heading>
            <Heading textSize="2em" lineHeight="1.2" textAlign="right" textColor="white">
              HTML Imports
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" maxWidth={1200}>
            <Image src={images.holdOn.replace("/", "")} width="100%" />
          </Slide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/1.html")}
            ranges={[
              { loc: [0, 13], note: "Custom Element"},
              { loc: [0, 1], note: "Standard HTML"},
              { loc: [2, 3], note: "Use our element" },
              { loc: [4, 13], note: "That's it for the HTML, only Script left" },
              { loc: [5, 6], note: "Define a Class for our Element" },
              { loc: [5, 10], note: "Our Class has only one method" },
              { loc: [6, 9], note: "connectedCallback() is called when an element is attached to the DOM" },
              { loc: [7, 8], note: "Right now we simply set some innerHTML" },
              { loc: [11, 12], note: "Then we tell the browser about our element" },
              { loc: [0, 13], note: <Link textColor="white" textDecoration="underline" href="https://webcomponents.ruph.in/lessons/demo/01.html">See it in action</Link> },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/2.html")}
            ranges={[
              { loc: [0, 18], note: "Let's get rid of that innerHTML" },
              { loc: [2, 6], note: "We define a template for our content" },
              { loc: [9, 14], note: "Attach it in the connectedCallback" },
              { loc: [10, 11], note: "First we find our Template" },
              { loc: [10, 12], note: "Then we clone the content" },
              { loc: [10, 13], note: "And finally attach that to our element" },
              { loc: [0, 18], note: <Link textColor="white" textDecoration="underline" href="https://webcomponents.ruph.in/lessons/demo/02.html">See it in action</Link> },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/3.html")}
            ranges={[
              { loc: [0, 16], note: "Styling is easy"},
              { loc: [7, 12], note: "We can use normal CSS" },
              { loc: [4, 13], note: "We just use a <style> tag in our Template" },
              { loc: [15, 22], note: "No other changes" },
              { loc: [0, 3], note: "But it's not perfect" },
              { loc: [0, 20], note: <Link textColor="white" textDecoration="underline" href="https://webcomponents.ruph.in/lessons/demo/03.html">See it in action</Link> },
            ]}></CodeSlide>

          <Slide transition={["slide"]} bgColor="black" maxWidth={1200}>
            <Heading textSize="1.6em" caps margin="-1em 0 0 0" textColor="white">
              Shadow DOM to the rescue!
            </Heading>
            <Image src={images.shadow.replace("/", "")} width="80%" />
          </Slide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/4.html")}
            ranges={[
              { loc: [6, 15], note: "ShadowDOM encapsulates our styles within our element"},
              { loc: [18, 24], note: "We just have to change our connectedCallback a little" },
              { loc: [19, 21], note: "Still get our template and clone the content" },
              { loc: [19, 22], note: "But this time we attach a shadowRoot to ourself" },
              { loc: [19, 23], note: "And put the content in there!" },
              { loc: [0, 5] },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/5.html")}
            ranges={[
              { loc: [4, 9], note: "Properties and Attributes"},
              { loc: [25, 26], note: "Properties are like instance variables"},
              { loc: [2, 3], note: "Attributes live only in the DOM-part of your Element, and are not part of your Class"},
              { loc: [18, 20], note: "Use the normal DOM API to get and set them"},
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/6.html")}
            ranges={[
              { loc: [10, 23], note: "The Constructor"},
              { loc: [9, 11], note: "We use normal ES6 Classes, so we can also use the constructor()"},
              { loc: [10, 12], note: "The constructor has a few rules. The first one: always call super() first"},
              { loc: [10, 17], note: "We can use the constructor to set up some basics like creating our shadowRoot"},
              { loc: [10, 19], note: "Or setting initial properties"},
              { loc: [10, 19], note: "But remember: when the constructor runs we are not attached to the DOM yet"},
              { loc: [10, 19], note: "This means you CANNOT manipulate your children and you CANNOT read or write your attributes"},
              { loc: [23, 29], note: "So do those things in the connectedCallback"},
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/7.html")}
            ranges={[
              { loc: [0, 14], note: "Additional styling"},
              { loc: [8, 14], note: "In your stylesheet, the :host selector refers to your element itself"},
              { loc: [14, 17], note: "Pseudo-selectors work like this"},
              { loc: [17, 20], note: "Attribute selectors too"},
              { loc: [20, 23], note: "You can nest selectors like normal"},
            ]}></CodeSlide>

          <Slide transition={["zoom", "spin"]} bgColor="pink" maxWidth={1200}>
            <Interactive/>
          </Slide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/8.html")}
            ranges={[
              { loc: [0, 17], note: "Let's do some more advanced stuff"},
              { loc: [4, 9], note: "We want a nice way to access our internal elements with an ID"},
              { loc: [18, 24], note: "Clean up a bit by putting the template attaching in an internal method"},
              { loc: [24, 32], note: "Create an internal method to create our cache"},
              { loc: [25, 26], note: "Set a familiar property to use as a map"},
              { loc: [25, 27], note: "Loop over all our internal elements"},
              { loc: [25, 31], note: "If they have an ID, add them to our map"},
              { loc: [16, 17], note: "Now we can easily access stuff"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/9.html")}
            ranges={[
              { loc: [0, 17], note: "State Management"},
              { loc: [4, 9], note: "Lets say we have some state that we need to reflect in an internal component"},
              { loc: [12, 18], note: "We want that state to be represented by properties"},
              { loc: [18, 25], note: "Use getter and setter functions to control side effects of state change"},
              { loc: [18, 22], note: "The setter function is called when setting our property"},
              { loc: [19, 20], note: "If our property is set, we store the value in an internal variable"},
              { loc: [19, 21], note: "We also reflect the state change in other places in our element"},
              { loc: [22, 25], note: "The getter is easy, we just return our internal variable"},
              { loc: [16, 18], note: "It still feels like we are just using a property"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/10.html")}
            ranges={[
              { loc: [0, 17], note: "We can use this for 'data-binding'"},
              { loc: [4, 9], note: "Lets say we want to make a simple counter"},
              { loc: [6, 7], note: "Create a placeholder element where we can fill our value"},
              { loc: [12, 19], note: "A property holds our state"},
              { loc: [12, 19], note: "Clicking the button just updates our state"},
              { loc: [19, 23], note: "Use the setter to insert our property value into the placeholder"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/11.html")}
            ranges={[
              { loc: [0, 17], note: "Attributes are useful to semantically set our initial state"},
              { loc: [2, 3], note: "We want our element to be configurable from HTML"},
              { loc: [19, 22], note: "connectedCallback to the rescue! All we have to do is set the state"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/12.html")}
            ranges={[
              { loc: [0, 17], note: "We can also observe changes to our attribute"},
              { loc: [19, 22], note: "We have to tell the browser what attributes we want to observe"},
              { loc: [22, 27], note: "If any of these attributes change, the browser calls this callback"},
              { loc: [23, 24], note: "We check if the value is different from our property"},
              { loc: [0, 17], },
            ]}></CodeSlide>


          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/15.html")}
            ranges={[
              { loc: [0, 17], note: "Distributing child nodes"},
              { loc: [2, 5], note: "Sometimes we want our elements to carry child nodes"},
              { loc: [6, 10], note: "To insert child nodes, use <slot> in the Template"},
              { loc: [2, 10], note: "The content in our element is mounted in the <slot> in our Template"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/18.html")}
            ranges={[
              { loc: [0, 17], note: "Two nested elements"},
              { loc: [51, 60], note: "When a property is set, update our bindings, reflect to our attribute, and fire an event"},
              { loc: [83, 89], note: "Elements listen to events fired by children, and update their own state if needed"},
              { loc: [0, 17], },
            ]}></CodeSlide>











                    <Slide transition={["slide"]} bgColor="black" maxWidth={1200}>
                      <Heading textSize="1.6em" caps margin="-1em 0 0 0" textColor="white">
                        You dont need a build pipeline
                      </Heading>
                      <Heading textSize="1.6em" caps textColor="white">
                        if you have nothing to build
                      </Heading>
                      <Image src={images.build.replace("/", "")} />
                    </Slide>








                    <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
                      <Heading textSize="1.6em" margin="-1em 0 0 0" caps textColor="white">
                        Some things never change
                      </Heading>
                      <Image src={images.browsers.replace("/", "")} width="80%" />
                    </Slide>




          <Slide transition={["spin", "slide"]} bgColor="primary" maxWidth={1200}>
            <Heading caps textSize="3em" margin="0 0 0.4em 0" textColor="pink">
              Thank you!
            </Heading>
            <Text textSize="2.4em" margin="0 0 0.2em 0" textColor="blue" textFont="secondary">
              Goffert van Gool
            </Text>
            <Text textSize="2em" caps margin="0 0 1em 0" textColor="yellow" textFont="tertiary">
              Ruphin
            </Text>
            <Heading textSize="1.4em" textColor="white" margin="0 0 0.2em 0">
              Find these slides and the full course at
            </Heading>
            <Link textSize="1.4em" textColor="white" href="https://webcomponents.ruph.in">
              webcomponents.ruph.in/
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
