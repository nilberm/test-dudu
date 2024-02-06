"use client";

import styles from "./page.module.css";
import { ContainerContent, GridContainers } from "./style";
import { useState } from "react";

export default function Home() {
  const tempContentArray = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat libero sunt voluptates sint nesciunt eligendi architecto amet quibusdam ea, alias ducimus atque obcaecati beatae aliquam, a asperiores laudantium accusamus iste.",
  ];

  const [scenarioSelected, setScenarioSelected] = useState<string>("0");

  return (
    <main className={styles.main}>
      <select
        name="optionsGrid"
        id="optionsGrid"
        onChange={(v) => setScenarioSelected(v.target.value)}
      >
        <option value={0}>default</option>
        <option value={1}>scenario 1</option>
        <option value={2}>scenario 2</option>
        <option value={3}>scenario 3</option>
        <option value={4}>scenario 4</option>
      </select>

      <GridContainers scenarioSelected={scenarioSelected}>
        {tempContentArray.map((item: string, index) => {
          if (scenarioSelected === "1") {
            if (index === 0) {
              return (
                <ContainerContent key={index} className={`container-${index}`}>
                  {tempContentArray[0]} {tempContentArray[1]}
                </ContainerContent>
              );
            }
            if (index === 1) {
              return;
            }

            return (
              <ContainerContent key={index} className={`container-${index}`}>
                {item}
              </ContainerContent>
            );
          }

          if (scenarioSelected === "2") {
            if (index === 0) {
              return (
                <ContainerContent key={index} className={`container-${index}`}>
                  {tempContentArray[0]} {tempContentArray[1]}{" "}
                  {tempContentArray[1]}
                </ContainerContent>
              );
            }
            if (index === 1 || index === 2) {
              return;
            }

            return (
              <ContainerContent key={index} className={`container-${index}`}>
                {item}
              </ContainerContent>
            );
          }

          if (scenarioSelected === "3") {
            if (index === 0) {
              return (
                <ContainerContent key={index} className={`container-${index}`}>
                  {tempContentArray[0]} {tempContentArray[3]}{" "}
                </ContainerContent>
              );
            }
            if (index === 3) {
              return;
            }

            return (
              <ContainerContent key={index} className={`container-${index}`}>
                {item}
              </ContainerContent>
            );
          }

          if (scenarioSelected === "4") {
            if (index === 0) {
              return (
                <ContainerContent key={index} className={`container-${index}`}>
                  {tempContentArray[0]} {tempContentArray[3]}{" "}
                  {tempContentArray[6]}
                </ContainerContent>
              );
            }
            if (index === 3 || index === 6) {
              return;
            }

            return (
              <ContainerContent key={index} className={`container-${index}`}>
                {item}
              </ContainerContent>
            );
          }

          return (
            <ContainerContent key={index} className={`container-${index}`}>
              {item}
            </ContainerContent>
          );
        })}
      </GridContainers>
    </main>
  );
}
