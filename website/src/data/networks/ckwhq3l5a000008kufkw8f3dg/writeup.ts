import { NetworkWriteup, ShowcaseNetwork } from '../../../utils/showcase';
import { rakWireless } from '../../hardware/rakWireless';

export const metadata: ShowcaseNetwork = {
  id: "ckwhq3l5a000008kufkw8f3dg",
  title: "Network 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dui mollis.",
  nodes: [
    {
      latitude: -37.656719,
      longitude: 145.632219,
    },
    {
      latitude: -37.633466,
      longitude: 145.692371,
    },
    {
      latitude: -37.559148,
      longitude: 145.735771,
    },
  ],
  tags: ["community", "largeNetwork"],
};

export const writeup: NetworkWriteup = {
  summary: "This is the article summary.",
  body: [
    {
      heading: "This is the first heading.",
      body: "This is the first body segment.",
    },
    {
      heading: "This is the second heading.",
      body: "This is the second body segment.",
    },
    {
      heading: "This is the second heading.",
      body: "This is the second body segment.",
    },
  ],
  bom: [
    {
      name: "This is the first material name.",
      details: "This is the first material details.",
      image: "https://example.com/image.png",
      url: "https://example.com/material",
    },
    rakWireless.RAK19003,
    rakWireless.RAK5005_O,
    rakWireless.RAK11200,
    rakWireless.RAK11310,
    rakWireless.RAK4631,
    rakWireless.RAK13101,
    rakWireless.RAK2305,
    rakWireless.RAK5860,
    rakWireless.RAK12003,
    rakWireless.RAK12004,
    rakWireless.RAK12005,
    rakWireless.RAK12006,
    rakWireless.RAK12007,
    rakWireless.RAK12009,
    rakWireless.RAK12010,
    rakWireless.RAK12011,
    rakWireless.RAK12012,
    rakWireless.RAK12015,
    rakWireless.RAK12500,
    rakWireless.RAK16000,
    rakWireless.RAK18000,
    rakWireless.RAK1901,
    rakWireless.RAK1902,
    rakWireless.RAK1903,
    rakWireless.RAK1904,
    rakWireless.RAK1906,
    rakWireless.RAK1910,
    rakWireless.RAK13001,
    rakWireless.RAK13002,
    rakWireless.RAK13003,
    rakWireless.RAK13004,
    rakWireless.RAK13005,
    rakWireless.RAK14002,
    rakWireless.RAK16001,
    rakWireless.RAK1920,
    rakWireless.RAK5801,
    rakWireless.RAK5802,
    rakWireless.RAK5804,
    rakWireless.RAK5811,
    rakWireless.RAK14000,
    rakWireless.RAK14001,
    rakWireless.RAK14003,
    rakWireless.RAK1921,
    rakWireless.RAK12002,
    rakWireless.RAK18001,
    rakWireless.RAK19005,
    rakWireless.RAK19008,
    rakWireless.RAK15000,
    rakWireless.RAK15001,
    rakWireless.RAK15002,
    rakWireless.RAK19002,
    rakWireless.RAK19004,
    rakWireless.RAK19006,
    rakWireless.RAK17000,
  ],
  author: {
    name: "Author Name",
    about: "This is the author's about text.",
    avatarUrl: "https://avatars0.githubusercontent.com/u/1234?s=460&v=4",
    url: "",
  },
};
