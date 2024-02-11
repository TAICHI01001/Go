import { ProductDetails } from "../interface/Product";
const generateMockProductDetail = (
  id: number,
  image: string,
  name: string,
  price: number,
  description: string,
  weight: string,
  code: string
): ProductDetails => ({
  id,
  image,
  name,
  price,
  description,
  weight,
  code,
});
const mockProductsDetail = (): ProductDetails[] => {
  return [
    generateMockProductDetail(
      1,
      "img",
      "SSD",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
    generateMockProductDetail(
      2,
      "img",
      "RAM",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
    generateMockProductDetail(
      3,
      "img",
      "ROM",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
    generateMockProductDetail(
      4,
      "img",
      "CPU",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
    generateMockProductDetail(
      5,
      "img",
      "GPU",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
    generateMockProductDetail(
      6,
      "img",
      "KEYBOARD",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
    generateMockProductDetail(
      7,
      "img",
      "SCREEN",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
    generateMockProductDetail(
      8,
      "img",
      "SSD",
      112.112,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expeditaLorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi similique ut laborum ad odit provident eligendi aperiam alias expedita..",
      "112 * 112 * 112 cm, 112.112 kg",
      "112"
    ),
  ];
};

export default mockProductsDetail;
