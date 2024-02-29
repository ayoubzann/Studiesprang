import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Accordion } from "flowbite-react";
import "./Feedbackcard.css";

const FeedbackCard = () => {
  return (
    <div className="p-2 bg-slate-100 feedbackcard">
      <Tabs className="tabs" isFitted variant="soft-rounded" colorScheme="green">
        <TabList mb="1em">
          <Tab>
            <p className="text-3xl">😄</p>
          </Tab>
          <Tab _selected={{ color: "white", bg: "orange.400" }}>
            <p className="text-3xl">🫤</p>
          </Tab>
          <Tab _selected={{ color: "white", bg: "red.400" }}>
            <p className="text-3xl">😵</p>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h2 className="text-xl font-bold m-5">Dette var bra!</h2>
            <Accordion className="accordion">
              <Accordion.Panel>
                <Accordion.Title>✅ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>✅ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>✅ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </TabPanel>
          <TabPanel>
          <Accordion className="accordion">
              <Accordion.Panel>
                <Accordion.Title> ➡️ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title> ➡️ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title> ➡️ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </TabPanel>
          <TabPanel>
          <Accordion className="accordion">
              <Accordion.Panel>
                <Accordion.Title> ❌ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title> ❌ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title> ❌ Lorem ipsum dolor sit</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, repellendus quisquam id odio at ea cupiditate.
                    Animi, reprehenderit totam sequi iste enim quisquam, fuga
                    blanditiis eius laborum illum eos necessitatibus.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur blanditiis laboriosam fugit necessitatibus cumque
                    corrupti, cupiditate ut. Ducimus, dicta obcaecati placeat
                    officiis magni consectetur eligendi modi quaerat recusandae
                    minus aperiam praesentium asperiores impedit tempore
                    dignissimos. Perferendis nobis accusamus pariatur odit.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default FeedbackCard;
