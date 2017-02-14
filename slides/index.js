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
  textWebcomponents: require("../assets/text-webcomponents.png"),
  textCustomelements: require("../assets/text-customelements.png"),
  textThankyou: require("../assets/text-thankyou.png"),
  textGoffertvangool: require("../assets/text-goffertvangool.png"),
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
  secondary: "NeoNoire",
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
            <Image src={images.textWebcomponents.replace("/", "")} width="100%" />
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
                textSize="2.5rem"
                lang="javascript"
                source={require("raw!../assets/jquery.txt")}
              />
            </div>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <div>
              <CodePane
                backgroundColor="black"
                textSize="2.5rem"
                lang="javascript"
                source={require("raw!../assets/vanilla.txt")}
              />
            </div>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" maxWidth={1200}>
            <Heading margin="-1em 0 .1em 0" textColor="white">
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
            <Image src={images.textCustomelements.replace("/", "")} width="100%" />
            <Heading size={1} fit caps lineHeight={2} textColor="white">
              Associate a <span style={{color:"#69CFF9", textDecoration:"underline"}}>tag</span> with a <span style={{color:"#69CFF9", textDecoration:"underline"}}>class</span>
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black" maxWidth={1200}>
            <Image src={images.textWebcomponents.replace("/", "")} width="100%" />
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
              { loc: [0, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Custom Element</Text>},
              { loc: [0, 1], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Standard HTML</Text>},
              { loc: [2, 3], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Use our element</Text>},
              { loc: [4, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">That&#39;s all the HTML, only Script left</Text>},
              { loc: [5, 6], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Define a Class for our Element</Text>},
              { loc: [5, 10], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Our Class has only one method</Text>},
              { loc: [6, 9], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">connectedCallback() is called when an element is attached to the DOM</Text> },
              { loc: [7, 8], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Right now we simply set some innerHTML</Text>},
              { loc: [11, 12], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Then we tell the browser about our element</Text> },
              { loc: [0, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white"><Link textColor="white" textDecoration="underline" href="https://webcomponents.ruph.in/lessons/demo/01.html">See it in action</Link></Text> },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/2.html")}
            ranges={[
              { loc: [0, 18], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Let&#39;s get rid of that innerHTML</Text> },
              { loc: [2, 6], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We define a template for our content</Text> },
              { loc: [9, 14], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Attach it in the connectedCallback</Text> },
              { loc: [10, 11], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">First we find our Template</Text> },
              { loc: [10, 12], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Then we clone the content</Text> },
              { loc: [10, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">And finally attach that to our element</Text> },
              { loc: [0, 18], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white"><Link textColor="white" textDecoration="underline" href="https://webcomponents.ruph.in/lessons/demo/02.html">See it in action</Link></Text> },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/3.html")}
            ranges={[
              { loc: [0, 14], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Styling is easy</Text>},
              { loc: [7, 12], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We can use normal CSS</Text> },
              { loc: [4, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We just use a &lt;style&gt; tag in our Template</Text> },
              { loc: [15, 22], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">No other changes</Text> },
              { loc: [0, 3], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">But it&#39;s not perfect</Text> },
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
              { loc: [4, 13], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">ShadowDOM encapsulates our styles within our element</Text>},
              { loc: [16, 22], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We just have to change our connectedCallback a little</Text> },
              { loc: [17, 19], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Still get our template and clone the content</Text> },
              { loc: [17, 20], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">But this time we attach a shadowRoot to our element</Text> },
              { loc: [17, 21], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">And put the content in there!</Text> },
              { loc: [0, 4], note: <Link textColor="white" textDecoration="underline" href="https://webcomponents.ruph.in/lessons/demo/04.html">See it in action</Link> },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/5.html")}
            ranges={[
              { loc: [2, 7], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Properties and Attributes</Text>},
              { loc: [23, 24], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Properties are like instance variables</Text>},
              { loc: [0, 1], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Attributes live only in the DOM-part of your Element, and are not part of your Class</Text>},
              { loc: [16, 18], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Use the normal DOM API to get and set attributes</Text>},
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/6.html")}
            ranges={[
              { loc: [8, 21], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">The Constructor</Text>},
              { loc: [7, 9], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We use normal ES6 Classes, so we can also use the constructor()</Text>},
              { loc: [8, 10], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">The constructor has a few rules. The first rule: always call super() first</Text>},
              { loc: [8, 15], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We can use the constructor to set up some basics like creating our shadowRoot and inserting our template</Text>},
              { loc: [8, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">And setting initial properties</Text>},
              { loc: [8, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">But remember: when the constructor runs we are not attached to the DOM yet</Text>},
              { loc: [8, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">This means you CANNOT manipulate your children and you CANNOT read or write your attributes</Text>},
              { loc: [21, 27], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">So do those things in the connectedCallback</Text>},
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/7.html")}
            ranges={[
              { loc: [0, 14], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Additional styling</Text>},
              { loc: [8, 14], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">In your stylesheet, the :host selector refers to your element itself</Text>},
              { loc: [14, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Pseudo-selectors work like this</Text>},
              { loc: [17, 20], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Attribute selectors too</Text>},
              { loc: [20, 23], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">You can nest selectors like normal</Text>},
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

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/9.html")}
            ranges={[
              { loc: [0, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">State Management</Text>},
              { loc: [4, 9], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Lets say we have some state that we need to reflect in an internal component</Text>},
              { loc: [12, 18], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We want that state to be represented by properties</Text>},
              { loc: [18, 25], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Use getter and setter functions to control side effects of state change</Text>},
              { loc: [18, 22], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">The setter function is called when setting our property</Text>},
              { loc: [19, 20], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">If our property is set, we store the value in an internal variable</Text>},
              { loc: [19, 21], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We also reflect the state change in other places in our element</Text>},
              { loc: [22, 25], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">The getter is easy, we just return our internal variable</Text>},
              { loc: [16, 18], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">It still feels like we are just using a property</Text>},
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
              { loc: [0, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We can use this for 'data-binding'</Text>},
              { loc: [4, 9], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Lets say we want to make a simple counter</Text>},
              { loc: [6, 7], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Create a placeholder element where we can fill our value</Text>},
              { loc: [12, 19], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">A property holds our state</Text>},
              { loc: [12, 19], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Clicking the button just updates our state</Text>},
              { loc: [19, 23], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Use the setter to insert our property value into the placeholder</Text>},
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
              { loc: [0, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Attributes are useful to semantically set our initial state</Text>},
              { loc: [2, 3], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We want our element to be configurable from HTML</Text>},
              { loc: [19, 22], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">connectedCallback to the rescue! All we have to do is set the state</Text>},
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
              { loc: [0, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We can also observe changes to our attribute</Text>},
              { loc: [19, 22], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We have to tell the browser what attributes we want to observe</Text>},
              { loc: [22, 27], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">If any of these attributes change, the browser calls this callback</Text>},
              { loc: [23, 24], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">We check if the value is different from our property</Text>},
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
              { loc: [0, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Distributing child nodes</Text>},
              { loc: [2, 5], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Sometimes we want our elements to carry child nodes</Text>},
              { loc: [6, 10], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">To insert child nodes, use &lt;slot&gt; in the Template</Text>},
              { loc: [2, 10], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">The content in our element is mounted in the &lt;slot&gt; in our Template</Text>},
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
              { loc: [0, 17], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Two nested elements</Text>},
              { loc: [51, 60], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">When a property is set, update our bindings, reflect to our attribute, and fire an event</Text>},
              { loc: [83, 89], note: <Text margin="0" textSize="0.8em" lineHeight="1" textColor="white">Elements listen to events fired by children, and update their own state if needed</Text>},
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
            <Image src={images.textThankyou.replace("/", "")} width="100%" />
            <Heading textSize="2em" margin="0 0 0.4em 0" textColor="blue">
              Goffert van Gool
            </Heading>
            <Text textSize="2em" caps margin="-0.3em 0 1em 0" textColor="yellow" textFont="tertiary">
              Ruphin
            </Text>
            <Heading textSize="1.4em" textColor="white" margin="0 0 0.2em 0">
              Find these slides and more at
            </Heading>
            <Link textSize="1.5em" textColor="white" href="https://webcomponents.ruph.in">
              webcomponents.ruph.in/
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
