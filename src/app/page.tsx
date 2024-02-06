"use client";

import Container from "@/components/Containers";
import styles from "./page.module.css";
import { GridContainers } from "./style";

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

  return (
    <main className={styles.main}>
      <GridContainers>
        {tempContentArray.map((item: string, index) => {
          return (
            <Container key={index} position={index}>
              {item}
            </Container>
          );
        })}
      </GridContainers>
    </main>
  );
}
