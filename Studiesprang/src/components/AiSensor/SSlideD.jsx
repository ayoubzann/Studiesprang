import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./styles/SensorcardD.css";

const SSlideD = ({handleRestart}) => {


  return (
    <div className="aisensor-feedback">
      <Tabs variant="soft-rounded" isFitted colorScheme="blue" className="tabs">
        <TabList>
            <div className="tablist">
          <Tab className="tabheading">Kriterier</Tab>
          <Tab className="tabheading">Tilbakemelding</Tab>
          <Tab className="tabheading">Forbedringspunkter</Tab>
            </div>
        </TabList>

        <TabPanels>
          <TabPanel className="tab1">
            <h2 className="criteriatitle">
              Ai-Sensoren har vurdert deg på følgende kriterier:
            </h2>
            <List spacing={4} className="criterialist">
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon color="blue" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel className="text-left">
            <h2 className="criteriatitle">Tilbakemelding</h2>
            <h3 className="text-center mb-3">Del 1</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              eius, officiis quisquam sunt asperiores eligendi eos, quas
              incidunt a corrupti nisi ducimus doloribus suscipit quo eveniet!
              Quia qui quis voluptatem quisquam iusto tenetur eius velit
              doloremque magni maiores, id earum ipsum unde voluptatibus animi
              deserunt consectetur eligendi quasi quibusdam reiciendis ratione.
              Perferendis placeat quia quaerat ratione quod porro hic et id
              distinctio eaque possimus sunt provident, eius aut obcaecati nihil
              esse asperiores corrupti ea doloribus deleniti dolorum nemo ut?
              Quo, ipsam eveniet doloremque obcaecati ullam, sapiente incidunt
              tenetur non, dolorum ut quam eaque deleniti sit cum itaque rem
              mollitia minima molestias est architecto dignissimos amet.
            </p>
            <br />
            <br />
            <br />
            <h3 className="text-center mb-3">Del 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              eius, officiis quisquam sunt asperiores eligendi eos, quas
              incidunt a corrupti nisi ducimus doloribus suscipit quo eveniet!
              Quia qui quis voluptatem quisquam iusto tenetur eius velit
              doloremque magni maiores, id earum ipsum unde voluptatibus animi
              deserunt consectetur eligendi quasi quibusdam reiciendis ratione.
              Perferendis placeat quia quaerat ratione quod porro hic et id
              distinctio eaque possimus sunt provident, eius aut obcaecati nihil
              esse asperiores corrupti ea doloribus deleniti dolorum nemo ut?
              Quo, ipsam eveniet doloremque obcaecati ullam, sapiente incidunt
              tenetur non, dolorum ut quam eaque deleniti sit cum itaque rem
              mollitia minima molestias est architecto dignissimos amet.
            </p>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl"> Punkter til forbedring</h3>
              <ul className="list-disc mb-5">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
                <li>Point 5</li>
                <li>Point 6</li>
              </ul>

              <h3 className="text-2xl"> Rettskriving</h3>
              <ul className="list-disc mb-5">
                <li>Item A</li>
                <li>Item B</li>
                <li>Item C</li>
                <li>Item D</li>
                <li>Item E</li>
                <li>Item F</li>
              </ul>

              <h3 className="text-2xl"> Estimert karakter:</h3>
              <p className="text-5xl">A</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <button onClick={handleRestart}> <div className="nextpage hover:shadow-lg hover:bg-gray-700 shadow"> Ny sensorretting</div></button>
    </div>
  );
};

export default SSlideD;
