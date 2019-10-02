import React from "react";
import withBaseUrl from "@docusaurus/withBaseUrl";
import styles from "../pages/styles.module.css";
import classnames from "classnames";

const features = [
  {
    title: <>Powered by React</>,
    imageUrl: "img/undraw_react.svg",
    description: (
      <>
        With React NodeGui, you can build truly native apps with React. If you
        dont want to use React, there is also a pure{" "}
        <a href="https://nodegui.org">JavaScript based version</a>.
      </>
    )
  },
  {
    title: <>Open Source</>,
    imageUrl: "img/undraw_code_review.svg",
    description: (
      <>
        React NodeGui is an open source project maintained by an active
        community of contributors.
      </>
    )
  },
  {
    title: <> Cross Platform</>,
    imageUrl: "img/undraw_windows.svg",
    description: (
      <>
        React NodeGui apps build and run on Mac, Windows, and Linux platforms.
      </>
    )
  }
];
export const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map(({ imageUrl, title, description }, idx) => (
            <div key={idx} className={classnames("col col--4", styles.feature)}>
              {imageUrl && (
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={withBaseUrl(imageUrl)}
                    alt={title}
                  />
                </div>
              )}
              <h3 className="text--center">{title}</h3>
              <p className="text--center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
