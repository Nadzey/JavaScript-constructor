import image from "./assets/image1.png";
import {
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
  TextBlock,
} from "./classes/blocks";

const text = `
This website on JavaScript cretead by Nadia: <a href="https://www.linkedin.com/in/nadzeya-kaluzayeva/" target="_blank">Nadia Koluzaeva</a>. Here you can find information about me
`;
export const model = [
  new TitleBlock("Pure JavaScript Website Builder", {
    tag: "h2",
    //styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem)`,
    styles: {
      background: "linear-gradient(to right, #5f9ea0, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new ColumnsBlock(
    [
      "Website on pure JavaScript without using any frameworks",
      "I can do it by myself",
      "JavaScript it is easy and funny",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #2f4f4f, #cd5c5c)",
        color: "#fff",
        "text-weight": "bold",
        padding: "2rem",
        "text-align": "center",
      },
    }
  ),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "This is picture",
  }),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f0808a, #f0808c)",
      "text-weight": "bold",
      padding: "1rem",
    },
  }),
];
