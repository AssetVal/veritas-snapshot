type premiumService = 'rush'
                    | 'avm'
                    | 'rentRange'
                    | 'adjustment';

interface iProductType {
  name?: string,
  orderType?: string,
  pdfTypes?: Array<string>,
  premiumServices?: Array<premiumService>,
  value?: string,
}

export default class ProductType implements iProductType {
  name: string;
  orderType: string;
  pdfTypes: Array<string>;
  premiumServices: Array<premiumService>;
  value: string;

  constructor({name, orderType, pdfTypes, premiumServices, value}: iProductType) {
    if (name) this.name = name;
    if (orderType) this.orderType = orderType;
    if (pdfTypes) this.pdfTypes = pdfTypes;
    if (premiumServices) this.premiumServices = premiumServices;
    if (value) this.value = value;
  }
}
