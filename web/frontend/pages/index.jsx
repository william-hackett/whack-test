import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { hoodieImage, telfarImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading><i>I AM ALWAYS DOING THAT WHICH I CANNOT DO,<br />
                  IN ORDER THAT I MAY LEARN HOW TO DO IT.</i></Heading>
                  <p>
                    <b>Hello Alan!</b> 🪲 <br />
                    I'm ready to be your padawan.
                  </p>
                  <p>
                    And we can finally get ourselves these {" "}
                    <Link url="https://www.helenaeisenhart.com/shop/barb-wire-hoodie" external>
                      barbed wire hoodies 
                    </Link>
                    !
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={hoodieImage}
                    alt="Helena Eisenhart hoodie"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={telfarImage}
                    alt="Alan Design"
                    width={120}
                  />
                </div>
              </Stack.Item>
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading><i>TELFAR DESIGN KING</i></Heading>
                  <p>
                  <b>Found these gems...</b><br /><br />
                  Les get creating! Shopify apps, paracord straps, retail experiences, installations, you name it...
                  </p>
                </TextContainer>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
