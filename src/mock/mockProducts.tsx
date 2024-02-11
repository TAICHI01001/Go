import { Product } from "../interface/Product";
const generateMockProduct = (
  id: number,
  image: string,
  name: string,
  price: number,
  description: string
): Product => ({
  id,
  image,
  name,
  price,
  description,
});
const mockProducts = (): Product[] => {
  return [
    generateMockProduct(
      1,
      "img",
      "SSD",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
    generateMockProduct(
      2,
      "img",
      "RAM",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
    generateMockProduct(
      3,
      "img",
      "ROM",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
    generateMockProduct(
      4,
      "img",
      "CPU",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
    generateMockProduct(
      5,
      "img",
      "GPU",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
    generateMockProduct(
      6,
      "img",
      "KEYBOARD",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
    generateMockProduct(
      7,
      "img",
      "SCREEN",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
    generateMockProduct(
      8,
      "img",
      "SSD",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita.."
    ),
  ];
};

export default mockProducts;
