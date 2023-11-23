import React from 'react';
import 'tailwindcss/tailwind.css'
import { Tabs, Tab } from '/components/Tabs'; 
import { Card, CardBody } from '/components/Card';

export default function App() {
  return (
    <div class="mt-12 ">
      <Tabs>
        <Tab title="Photos">
          <Card>
            <CardBody>
             Hello
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>

 

      </Tabs>
    </div>
  );
}