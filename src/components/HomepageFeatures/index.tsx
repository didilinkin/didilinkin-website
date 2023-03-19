import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "便于使用",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Docusaurus 经过全新设计，易于安装和使用 用于让您的网站快速启动和运行</>
    ),
  },
  {
    title: "专注于重要的事情",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus 让您专注于您的文档，而我们会做杂务 去将您的文档移动到{" "}
        <code>docs</code> 目录中
      </>
    ),
  },
  {
    title: "由 React 驱动",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        通过重用 React 扩展或自定义您的网站布局。 Docusaurus 可以
        在重复使用相同的页眉和页脚的同时进行扩展。
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
