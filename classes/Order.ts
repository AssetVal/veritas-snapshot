import type Project from './Project';
import type SystemOrderComment from './SystemOrderComment';
import type ProductType from './ProductType';
import type Vendor from './Vendor';
import type AnalystOrderComment from './AnalystOrderComment';

export declare interface iOrder {
  _id: string
  APN: string
  client?: any,
  borrower?: string,
  loanNumber?: string,
  loanKey?: string,
  orderID?: string,
  notes?: string,
  clientDueDate?: Date,
  vendorDueDate?: Date,
  batchName?: string,
  lockBox?: string,
  poolDept?: string,
  orderedBy?: string,
  project?: Project,
  photos?: {
    exteriorFiles?: Array<{
      name: string,
      category: 'frontView'|'frontAngledView'|'streetView'|'addressVerification'|'dwellingRear'|'dwellingRight'|'dwellingLeft'|'backyard'|'addendum'
    }>,
    interiorFiles?: Array<{
      name: string,
      note: string,
    }>,
  },
  supportingDocuments?: {
    hasPublicRecord?: boolean,
    files?: Array<string>
  },
  address?: {
    street?: string,
    unitNumber?: string,
    city?: string,
    state?: string,
    zip?: string,
    location?: Array<number>,
    locationType?: string,
    CBSA?: string,
    county?: string,
    phone?: string,
    phoneExt?: string,
    correction?: any
  },
  associationInfo?: {
    name?: string,
    contact?: string,
    phone?: string,
    fee?: number
    feeSchedule?: 'monthly'|'annually'
    feesCurrent?: 'yes'|'no'|'unknown'
    feesDelinquentBy?: number,
    feeIncludes?: 'insurance'|'landscape'|'pool'|'tennis'|'other'
  },
  tags?: Array<{
    tag: 'Manual Assign'|'Rework'|'Double'|'Duplicate'|'Partial'|'Address Verification',
    status: string,
  }>,
  billing?: {
    vendorFee?: number,
    code?: string,
    ccEmails?: Array<string>,
  },
  contactInfo?: {
    name?: string,
    phone?: string,
    phoneExt?: string,
  },
  owner?: {
    name?: string,
    phone?: string,
    phoneExt?: string,
  },
  services?: {
    productType?: ProductType,
    pdfType?: string,
    rush?: boolean,
    AVM?: boolean,
    rentRange?: boolean,
    adjustment?: boolean,
    isInterior?: boolean,
    secondOpinionBPO?: boolean,
    highPriority?: boolean,
    double?: boolean
  },
  props?: {
    attached?: boolean
    bedrooms?: number,
    bathrooms?: {
      full?: number,
      partial?: number,
    },
    basement?: {
      basementType?: 'none_cellar'|'partial'|'full',
      percentFinished?: number,
      inGLA?: boolean,
      sqFt?: number,
      finishedRooms?: number,
    },
    bgSqFt?: number,
    bgFinRooms?: number,
    commercialUnits?: number,
    mixedUseUnits?: number,
    garage?: {
      type?: 'attached'|'detached'|'carport'|'none',
      size?: number,
      parking?: 'driveway'|'assigned'|'offStreet'|'onStreet',
    },
    lotSize?: {
      total?: string,
      units?: 'acres'|'sqFt',
    },
    belongsToAssociation?: boolean,
    GLA?: number,
    yearBuilt?: number,
    propertyType?: 'singleFamily'|'twoFamily'|'threeFamily'|'fourFamily'|'condo'|'manufacturedHome'|'mobileHome'|'co-op'|'vacant'|'commercialProperty'|'mixedUse',
    style?: string,
    construction?: string,
    view?: 'residential'|'oceanBay'|'lakePond'|'mountainHills'|'cityscape'|'golfCourse'|'parkGreenbelt'|'waterway'|'unremarkable'|'wooded',
    waterfront?: boolean,
    pool?: boolean,
    fireplaces?: number,
    gated?: boolean,
    wasteDisposal?: 'publicSewer'|'septic'|'cesspool',
    waterSource?: 'public'|'well'|'other',
    infoSource?: 'taxRecordAssessor'|'MLS'|'appraisal'|'estimate'|'internet',
    APN?: string,
  },
  history?: {
    lastSaleDate?: Date,
    lastSalePrice?: number,
    taxValue?: number,
    taxesCurrent?: 'yes'|'no'|'unknown',
  },
  propertyLocation?: {
    locationType?: 'suburban'|'urban'|'rural'|'extremelyRural',
    coordinates?: Array<number>,
    geo?: {
      long?: number,
      lat?: number,
    }
  },
  DNA?: {
    APN?: string,
    propertyType?: 'singleFamily' | 'twoFamily' | 'threeFamily' | 'fourFamily' | 'condo' | 'manufacturedHome' | 'mobileHome' | 'co-op' | 'vacant' | 'commercialProperty' | 'mixedUse',
    GLA?: number,
    bed?: number,
    fullBath?: number,
    partialBath?: number,
    yearBuilt?: number,
    lotSize?: {
      total?: string,
      units?: string,
    },
    sqFt?: number,
    infoSource?: string,
    coordinates?: Array<number>,
    geo?: {
      long?: number,
      lat?: number,
    }
  },
  inspection?: {
    date?: Date,
    time?: '5am'|'6am'|'7am'|'8am'|'9am'|'10am'|'11am'|'12pm'|'1pm'|'2pm'|'3pm'|'4pm'|'5pm'|'6pm'|'7pm'|'8pm'|'9pm'|'10pm',
  }
  zoning?: {
    zoningCode?: string,
    zoningDesc?: string,
    zoningCompliance?: 'legal' | 'legalNonconforming' | 'noZoning' | 'nonconforming' | 'illegal',
    zoningUse?: string,
    zoningBestUse?: boolean,
    nonconformingExplanation: string
    illegalExplanation: string
    bestUseExplanation: string
  },
  listingInfo?: {
    currentlyListed?: boolean,
    listedInLastThirtySixMonths?: boolean,
    status: 'sold'|'expired'|'canceled',
    listingCompany: string,
    listingBroker: string,
    phone: string,
    daysOnMarket: number,
    listDate: Date,
    originalListPrice: number,
    currentListPrice: number
  },
  QA_processor?: string,
  BPO_manager?: string,
  metrics?: {
    extensionRequested?: number
  },
  statusHistory?: Array<{
    event: 'Assigned'|'Declined'|'Order Created'|'Moved to Manual Assign',
    user?: string,
    timestamp: Date,
  }>,
  addressVerificationResult?: Record<string, any>,
  log?: Array<any>,
  added?: Date,
  savedAt?: Date,
  AnalystComments?: Array< AnalystOrderComment >,
  systemComments?: Array< SystemOrderComment >,
  completedBy?: Vendor,
}

export class Order implements iOrder {
  public changes: number;
  public _id: string;
  public APN: string;
  public inspection: {
    date: Date,
    time: '5am'|'6am'|'7am'|'8am'|'9am'|'10am'|'11am'|'12pm'|'1pm'|'2pm'|'3pm'|'4pm'|'5pm'|'6pm'|'7pm'|'8pm'|'9pm'|'10pm',
  };
  public photos?: {
    exteriorFiles?: Array<{
      _id?: string;
      name: string,
      category: 'frontView'|'frontAngledView'|'streetView'|'addressVerification'|'dwellingRear'|'dwellingRight'|'dwellingLeft'|'backyard'|'addendum'
    }>,
    interiorFiles?: Array<{
      _id?: string;
      name: string,
      note: string,
      tempData?: string,
    }>,
  };
  public supportingDocuments?: {
    hasPublicRecord?: boolean,
    files?: Array<string>
  };
  public address: {
    street?: string,
    unitNumber?: string,
    city?: string,
    state?: string,
    zip?: string,
    location?: Array<number>,
    locationType?: string,
    CBSA?: string,
    county?: string,
    phone?: string,
    phoneExt?: string,
    correction?: any
  };
  public associationInfo: {
    name: string,
    contact: string,
    phone: string,
    fee: number
    feeSchedule: 'monthly'|'annually'
    feesCurrent: 'yes'|'no'|'unknown'
    feesDelinquentBy: number,
    feeIncludes: 'insurance'|'landscape'|'pool'|'tennis'|'other'
  };
  public project: Project;
  public borrower: string;
  public loanNumber: string;
  public loanKey: string;
  public orderID: string;
  public notes: string;
  public clientDueDate: Date;
  public vendorDueDate: Date;
  public batchName: string;
  public lockBox: string;
  public poolDept: string;
  public orderedBy: string;
  public tags: Array<{
    tag: 'Manual Assign'|'Rework'|'Double'|'Duplicate'|'Partial'|'Address Verification',
    status: string,
  }>;
  public billing: {
    vendorFee: number,
    code: string,
    ccEmails: Array<string>,
  };
  public contactInfo: {
    name: string,
    phone: string,
    phoneExt: string,
  };
  public owner: {
    name: string,
    phone: string,
    phoneExt: string,
  };
  public services: {
    productType: ProductType,
    pdfType: string,
    rush: boolean,
    AVM: boolean,
    rentRange: boolean,
    adjustment: boolean,
    isInterior: boolean,
    secondOpinionBPO: boolean,
    highPriority: boolean,
    double: boolean
  };
  public props: {
    attached: boolean,
    bedrooms: number,
    bathrooms: {
      full: number,
      partial: number,
    },
    basement: {
      basementType: 'none_cellar'|'partial'|'full',
      percentFinished: number,
      inGLA: boolean,
      sqFt: number,
      finishedRooms: number,
    },
    bgSqFt: number,
    bgFinRooms: number,
    commercialUnits: number,
    mixedUseUnits: number,
    garage: {
      type: 'attached'|'detached'|'carport'|'none',
      size: number,
      parking: 'driveway'|'assigned'|'offStreet'|'onStreet',
    },
    lotSize: {
      total: string,
      units: 'sqFt'|'acres',
    },
    belongsToAssociation: boolean,
    GLA: number,
    yearBuilt: number,
    propertyType: 'singleFamily'|'twoFamily'|'threeFamily'|'fourFamily'|'condo'|'manufacturedHome'|'mobileHome'|'co-op'|'vacant'|'commercialProperty'|'mixedUse'
    style: string,
    construction: string,
    view: 'residential'|'oceanBay'|'lakePond'|'mountainHills'|'cityscape'|'golfCourse'|'parkGreenbelt'|'waterway'|'unremarkable'|'wooded',
    waterfront: boolean,
    pool: boolean,
    fireplaces: number,
    gated: boolean,
    wasteDisposal: 'publicSewer'|'septic'|'cesspool',
    waterSource: 'public'|'well'|'other',
    infoSource: 'taxRecordAssessor'|'MLS'|'appraisal'|'estimate'|'internet',
    APN: string,
  };
  public history: {
    lastSaleDate: Date,
    lastSalePrice: number,
    taxValue: number,
    taxesCurrent: 'yes'|'no'|'unknown',
  };
  public propertyLocation: {
    locationType: 'suburban'|'urban'|'rural'|'extremelyRural',
    coordinates: Array<number>,
    geo: {
      long: number,
      lat: number,
    }
  };
  public DNA: {
    APN: string,
    propertyType: 'singleFamily' | 'twoFamily' | 'threeFamily' | 'fourFamily' | 'condo' | 'manufacturedHome' | 'mobileHome' | 'co-op' | 'vacant' | 'commercialProperty' | 'mixedUse',
    GLA: number,
    bed: number,
    fullBath: number,
    partialBath: number,
    yearBuilt: number,
    lotSize: {
      total: string,
      units: string,
    },
    sqFt: number,
    infoSource: string,
    coordinates: Array<number>,
    geo: {
      long: number,
      lat: number,
    }
  };
  public zoning: {
    zoningCode: string,
    zoningDesc: string,
    zoningCompliance: 'legal' | 'legalNonconforming' | 'noZoning' | 'nonconforming' | 'illegal',
    zoningUse: string,
    zoningBestUse: boolean,
    nonconformingExplanation: string
    illegalExplanation: string
    bestUseExplanation: string
  };
  public listingInfo: {
    currentlyListed: boolean,
    listedInLastThirtySixMonths: boolean,
    status: 'sold'|'expired'|'canceled'
    listingCompany: string
    listingBroker: string
    phone: string,
    daysOnMarket: number,
    listDate: Date,
    originalListPrice: number,
    currentListPrice: number
  };
  public QA_processor: string;
  public BPO_manager: string;
  public metrics: {
    extensionRequested: number
  };
  public statusHistory: Array<{
    event: 'Assigned'|'Declined'|'Order Created'|'Moved to Manual Assign',
    user?: string,
    timestamp: Date,
  }>;
  public added: Date;
  public savedAt: Date;
  private fetchLink: string;
  public client: any;
  public systemComments: Array<SystemOrderComment>;
  public analystComments: Array<AnalystOrderComment>;
  public completedBy: Vendor;
  constructor(orderData: iOrder){
    this.changes = 0;
    this._id = orderData._id;
    this.APN = orderData.APN;
    this.inspection = {
      date: orderData.inspection?.date ?? null,
      time: orderData.inspection?.time ?? null,
    };
    this.supportingDocuments = orderData.supportingDocuments ?? {};
    this.client = orderData.client ?? null;
    this.photos = orderData.photos ?? {};
    this.address = {
      street: orderData.address?.street ?? null,
      unitNumber: orderData.address?.unitNumber ?? null,
      city: orderData.address?.city ?? null,
      state: orderData.address?.state ?? null,
      zip: orderData.address?.zip ?? null,
      location: orderData.address?.location ?? null,
      locationType: orderData.address?.locationType ?? null,
      CBSA: orderData.address?.CBSA ?? null,
      county: orderData.address?.county ?? null,
      phone: orderData.address?.phone ?? null,
      phoneExt: orderData.address?.phoneExt ?? null,
    };
    this.associationInfo = {
      name: orderData?.associationInfo?.name ?? null,
      contact: orderData?.associationInfo?.contact ?? null,
      phone: orderData?.associationInfo?.phone ?? null,
      fee: orderData?.associationInfo?.fee ?? null,
      feeSchedule: orderData?.associationInfo?.feeSchedule ?? null,
      feesCurrent: orderData?.associationInfo?.feesCurrent ?? null,
      feesDelinquentBy: orderData?.associationInfo?.feesDelinquentBy ?? null,
      feeIncludes: orderData?.associationInfo?.feeIncludes ?? null,
    };
    this.borrower = orderData?.borrower ?? null;
    this.loanNumber = orderData?.loanNumber ?? null;
    this.loanKey = orderData?.loanKey ?? null;
    this.orderID = orderData?.orderID ?? null;
    this.notes = orderData?.notes ?? null;
    this.clientDueDate = orderData?.clientDueDate ?? null;
    this.vendorDueDate = orderData?.vendorDueDate ?? null;
    this.batchName = orderData?.batchName ?? null;
    this.lockBox = orderData?.lockBox ?? null;
    this.poolDept = orderData?.poolDept ?? null;
    this.orderedBy = orderData?.orderedBy ?? null;
    this.tags = orderData?.tags ?? null;
    this.billing = {
      vendorFee: orderData?.billing?.vendorFee ?? null,
      code: orderData?.billing?.code ?? null,
      ccEmails: orderData?.billing?.ccEmails ?? null,
    };
    this.contactInfo = {
      name: orderData?.contactInfo?.name ?? null,
      phone: orderData?.contactInfo?.phone ?? null,
      phoneExt: orderData?.contactInfo?.phoneExt ?? null,
    };
    this.owner = {
      name: orderData?.owner?.name ?? null,
      phone: orderData?.owner?.phone ?? null,
      phoneExt: orderData?.owner?.phoneExt ?? null,
    };
    this.services = {
      productType: orderData?.services?.productType ?? null,
      pdfType: orderData?.services?.pdfType ?? null,
      rush: orderData?.services?.rush ?? null,
      AVM: orderData?.services?.AVM ?? null,
      rentRange: orderData?.services?.rentRange ?? null,
      adjustment: orderData?.services?.adjustment ?? null,
      isInterior: orderData?.services?.isInterior ?? null,
      secondOpinionBPO: orderData?.services?.secondOpinionBPO ?? null,
      highPriority: orderData?.services?.highPriority ?? null,
      double: orderData?.services?.double ?? null,
    };
    this.props = {
      attached: orderData?.props?.attached ?? null,
      bedrooms: orderData?.props?.bedrooms ?? null,
      bathrooms: {
        full: orderData?.props?.bathrooms?.full ?? null,
        partial: orderData?.props?.bathrooms?.partial ?? null,
      },
      basement: {
        basementType: orderData?.props?.basement?.basementType ?? null,
        percentFinished: orderData?.props?.basement?.percentFinished ?? null,
        inGLA: orderData?.props?.basement?.inGLA ?? null,
        sqFt: orderData?.props?.basement?.sqFt ?? null,
        finishedRooms: orderData?.props?.basement?.finishedRooms ?? null,
      },
      bgSqFt: orderData?.props?.bgSqFt ?? null,
      bgFinRooms: orderData?.props?.bgFinRooms ?? null,
      commercialUnits: orderData?.props?.commercialUnits ?? null,
      mixedUseUnits: orderData?.props?.mixedUseUnits ?? null,
      garage: {
        type: orderData?.props?.garage?.type ?? null,
        size: orderData?.props?.garage?.size ?? null,
        parking: orderData?.props?.garage?.parking ?? null,
      },
      lotSize: {
        total: orderData?.props?.lotSize?.total ?? null,
        units: orderData?.props?.lotSize?.units ?? null,
      },
      belongsToAssociation: orderData?.props?.belongsToAssociation ?? null,
      GLA: orderData?.props?.GLA ?? null,
      yearBuilt: orderData?.props?.yearBuilt ?? null,
      propertyType: orderData?.props?.propertyType ?? null,
      style: orderData?.props?.style ?? null,
      construction: orderData?.props?.construction ?? null,
      view: orderData?.props?.view ?? null,
      waterfront: orderData?.props?.waterfront ?? null,
      pool: orderData?.props?.pool ?? null,
      fireplaces: orderData?.props?.fireplaces ?? null,
      gated: orderData?.props?.gated ?? null,
      wasteDisposal: orderData?.props?.wasteDisposal ?? null,
      waterSource: orderData?.props?.waterSource ?? null,
      infoSource: orderData?.props?.infoSource ?? null,
      APN: orderData?.props?.APN ?? null,
    };
    this.history = {
      lastSaleDate: orderData?.history?.lastSaleDate ?? null,
      lastSalePrice: orderData?.history?.lastSalePrice ?? null,
      taxValue: orderData?.history?.taxValue ?? null,
      taxesCurrent: orderData?.history?.taxesCurrent ?? null,
    };
    this.fetchLink = '/wizard/autosave';
    this.propertyLocation = {
      locationType: orderData?.propertyLocation?.locationType ?? null,
      coordinates: orderData?.propertyLocation?.coordinates ?? null,
      geo: {
        long: orderData?.propertyLocation?.geo?.long ?? null,
        lat: orderData?.propertyLocation?.geo?.lat ?? null,
      },
    };
    this.DNA = {
      APN: orderData?.DNA?.APN ?? null,
      propertyType: orderData?.DNA?.propertyType ?? null,
      GLA: orderData?.DNA?.GLA ?? null,
      bed: orderData?.DNA?.bed ?? null,
      fullBath: orderData?.DNA?.fullBath ?? null,
      partialBath: orderData?.DNA?.partialBath ?? null,
      yearBuilt: orderData?.DNA?.yearBuilt ?? null,
      lotSize: {
        total: orderData?.DNA?.lotSize?.total ?? null,
        units: orderData?.DNA?.lotSize?.units ?? null,
      },
      sqFt: orderData?.DNA?.sqFt ?? null,
      infoSource: orderData?.DNA?.infoSource ?? null,
      coordinates: orderData?.DNA?.coordinates ?? null,
      geo: {
        long: orderData?.DNA?.geo?.long ?? null,
        lat: orderData?.DNA?.geo?.lat ?? null,
      },
    };
    this.zoning = {
      zoningCode: orderData?.zoning?.zoningCode ?? null,
      zoningDesc: orderData?.zoning?.zoningDesc ?? null,
      zoningCompliance: orderData?.zoning?.zoningCompliance ?? null,
      zoningUse: orderData?.zoning?.zoningUse ?? null,
      zoningBestUse: orderData?.zoning?.zoningBestUse ?? null,
      nonconformingExplanation: orderData?.zoning?.nonconformingExplanation ?? null,
      illegalExplanation: orderData?.zoning?.illegalExplanation ?? null,
      bestUseExplanation: orderData?.zoning?.bestUseExplanation,
    };
    this.listingInfo = {
      currentlyListed: orderData?.listingInfo?.currentlyListed ?? null,
      listedInLastThirtySixMonths: orderData?.listingInfo?.listedInLastThirtySixMonths ?? null,
      status: orderData?.listingInfo?.status ?? null,
      listingCompany: orderData?.listingInfo?.listingCompany ?? null,
      listingBroker: orderData?.listingInfo?.listingBroker ?? null,
      phone: orderData?.listingInfo?.phone ?? null,
      daysOnMarket: orderData?.listingInfo?.daysOnMarket ?? null,
      listDate: orderData?.listingInfo?.listDate ?? null,
      originalListPrice: orderData?.listingInfo?.originalListPrice ?? null,
      currentListPrice: orderData?.listingInfo?.currentListPrice,
    };
    this.QA_processor = orderData?.QA_processor ?? null;
    this.BPO_manager = orderData?.BPO_manager ?? null;
    this.metrics = {
      extensionRequested: orderData?.metrics?.extensionRequested ?? null,
    };
    this.statusHistory = orderData?.statusHistory ?? null;
    this.added = orderData?.added ?? null;
    this.savedAt = orderData?.savedAt ?? null;
  }
}

export default Order;
